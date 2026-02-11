import type { Definition, ExtractParams, ExtractResult, NotificationObjectDefinition, ParamsNever } from './json_rpc/schema/index.ts';
import type { minecraft } from './definitions/index.ts';


/**
 * Options for the JsonRpcClient.
 */
interface ClientOptions {
  /**
   * Optional authentication token for WebSocket connection.
   */
  token? : string
}


export class Client<Definitions extends Definition = minecraft.All> {
  private readonly ws : WebSocket;
  private readonly notificationListeners : Map<string, Set<(...params: unknown[]) => void>> = new Map();
  private requestId : number = 0;
  constructor(
    url : string,
    options? : ClientOptions
  ) {
    this.ws = new WebSocket(url, {
      headers: options?.token ? { Authorization: `Bearer ${options.token}` } : undefined
    });
  }

  public call<MethodName extends Definitions['name']>(
    method : MethodName,
    ...params : ParamsNever<ExtractParams<Definitions, MethodName>>
  ) : Promise<ExtractResult<Definitions, MethodName>> {
    const id = ++this.requestId;

    return new Promise((resolve, reject) => {
      
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
