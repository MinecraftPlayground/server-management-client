import type { Definition, ExtractParams, ExtractResult, NotificationObjectDefinition, ParamsNever } from './json_rpc/schema/index.ts';
import type { minecraft } from './definitions/index.ts';
import type { PendingRequest } from './pending_request.ts';
import type { ResponseObject } from './json_rpc/communication/response_object.ts';
import type { NotificationObject } from './json_rpc/communication/notification_object.ts';
import { isNotificationObject } from './json_rpc/communication/is_notification_object.ts';
import { parseMessageEventData } from './json_rpc/communication/parse_message_event_data.ts';
import type { RequestObject } from './json_rpc/communication/request_object.ts';


/**
 * Options for the JsonRpcClient.
 */
interface ClientOptions {
  /**
   * Optional authentication token for WebSocket connection.
   */
  token? : string
}

/**
 * JSON-RPC 2.0 WebSocket client for communicating with a Minecraft server.
 * 
 * Supports method calls and notifications (server-initiated events).
 * 
 * @template Definitions - Union type of all available method and notification definitions
 * 
 * @example
 * ```ts
 * const client = new Client('ws://localhost:25576', {
 *   token: 'your-auth-token-here'
 * });
 * 
 * // Make a method call
 * const players = await client.call('minecraft:players');
 * console.log(players);
 * 
 * // Listen for notifications
 * client.addNotificationListener('minecraft:notification/players/joined', ({ player }) => {
 *   console.log(`${player.name} joined the server`);
 * });
 * ```
 */
export class Client<Definitions extends Definition = minecraft.All> {
  private readonly ws : WebSocket;
  private readonly notificationListeners : Map<string, Set<(...params: unknown[]) => void>> = new Map();
  private readonly pendingRequests : Map<string | number | null, PendingRequest<unknown>> = new Map();
  private requestId : number = 0;

  /**
   * Create a new JSON-RPC client.
   * 
   * @param url WebSocket URL to connect to (e.g., 'ws://localhost:25576')
   * @param options Optional configuration
   * 
   * @example
   * ```ts
   * // Connect without authentication
   * const client = new Client('ws://localhost:25576');
   * 
   * // Connect with authentication token
   * const client = new Client('ws://localhost:25576', {
   *   token: 'your-auth-token-here'
   * });
   * ```
   */
  constructor(
    url : string,
    options? : ClientOptions
  ) {
    this.ws = new WebSocket(url, {
      headers: options?.token ? { Authorization: `Bearer ${options.token}` } : undefined
    });

    this.ws.addEventListener('message', this.handleMessageEvent);
  }

  /**
   * Handle incoming WebSocket messages.
   * 
   * Parses the message data and routes it to either:
   * - Notification listeners (if it's a notification)
   * - Pending request resolver/rejecter (if it's a response)
   * 
   * @param event WebSocket message event
   */
  private handleMessageEvent(event : MessageEvent<string>) : void {
    const data = parseMessageEventData(event.data);

    if (isNotificationObject(data)) {
      const notification = data as NotificationObject;
      const listeners = this.notificationListeners.get(notification.method);

      if (listeners) {
        const params = notification.params ? [notification.params] : []

        for (const listener of listeners) {
          listener(...params);
        }
      }

      return;
    }

    const response = data as ResponseObject;
    const pendingRequest = this.pendingRequests.get(response.id);

    if (!pendingRequest) {
      return;
    }

    this.pendingRequests.delete(response.id);

    if ('error' in response) {
      pendingRequest.reject(response.error);
    } else {
      pendingRequest.resolve(response.result);
    }
  }

  /**
   * Call a JSON-RPC method on the server.
   * 
   * Sends a request and returns a Promise that resolves with the result
   * or rejects with an error if the server returns an error response.
   * 
   * @template MethodName Name of the method to call
   * @param method Method name (e.g., 'minecraft:players')
   * @param params Method parameters (type-safe based on the method)
   * @returns Promise that resolves with the method result.
   * 
   * @example
   * ```ts
   * // Method without parameters
   * const players = await client.call('minecraft:players');
   * 
   * // Method with parameters
   * await client.call('minecraft:allowlist/add', {
   *   add: [{ id: 'uuid', name: 'PlayerName' }]
   * });
   * 
   * // Set server difficulty
   * await client.call('minecraft:serversettings/difficulty/set', {
   *   difficulty: 'hard'
   * });
   * ```
   */
  public call<MethodName extends Definitions['name']>(
    method : MethodName,
    ...params : ParamsNever<ExtractParams<Definitions, MethodName>>
  ) : Promise<ExtractResult<Definitions, MethodName>> {
    const id = ++this.requestId;

    const request : RequestObject = {
      jsonrpc: '2.0',
      method,
      id
    };

    if (params.length > 0) {
      request.params = params[0];
    }

    return new Promise((resolve, reject) => {
      this.pendingRequests.set(id, {
        resolve,
        reject
      });

      this.ws.send(JSON.stringify(request));
    });
  }

  /**
   * Register a listener for a specific notification type.
   * Multiple listeners can be registered for the same notification.
   * 
   * @param method Notification method name
   * @param listener Listener function that will be invoked when the notification is received
   * 
   * @example
   * ```ts
   * const client = new Client();
   * 
   * // Listen for player joined notifications
   * client.addNotificationListener('minecraft:notification/players/joined', ({ player }) => {
   *   console.log(`${player.name} joined the server`);
   * });
   * 
   * // Listen for server status updates
   * client.addNotificationListener('minecraft:notification/server/status', ({ status }) => {
   *   console.log(`Server has ${status.player?.length ?? 0} players online`);
   * });
   * ```
   */
  public addNotificationListener<MethodName extends Extract<Definitions, NotificationObjectDefinition>['name']>(
    method : MethodName,
    listener : (...params : ExtractParams<Definitions, MethodName>) => void
  ) : void {
    this.notificationListeners.get(method)?.add(listener);
  }

  /**
   * Remove a previously registered notification listener.
   * 
   * @param method Notification method name
   * @param listener Listener function to remove
   * 
   * @example
   * ```ts
   * const client = new Client();
   * 
   * const onPlayerJoined = ({ player }) => {
   *   console.log(`${player.name} joined`);
   * };
   * 
   * client.addNotificationListener('minecraft:notification/players/joined', onPlayerJoined);
   * 
   * client.removeNotificationListener('minecraft:notification/players/joined', onPlayerJoined);
   * ```
   */
  public removeNotificationListener<MethodName extends Extract<Definitions, NotificationObjectDefinition>['name']>(
    method : MethodName,
    listener : (...params : ExtractParams<Definitions, MethodName>) => void
  ) : void {
    this.notificationListeners.get(method)?.delete(listener);
  }
}
