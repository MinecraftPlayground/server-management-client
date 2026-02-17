import type { Definition } from './definition.ts';

/**
 * Definition interface for JSON-RPC notifications (server-initiated events).
 * 
 * Extends the base Definition interface with a 'notification' type discriminator.
 * Notifications are server-initiated messages that don't expect a response from the client.
 * They follow a fire-and-forget pattern for event broadcasting.
 * 
 * @template Name Notification name (ex. `'minecraft:notification/players/joined'`)
 * @template Params Tuple type of parameters (ex. `[{ player: PlayerObject }]` or `[]`)
 * @template Result Usually unknown for notifications as they don't have responses
 * 
 * @example
 * ```ts
 * // Notification without parameters
 * type ServerStartedNotification = NotificationObjectDefinition<
 *   'minecraft:notification/server/started',
 *   []
 * >;
 * 
 * // Notification with parameters
 * type PlayerJoinedNotification = NotificationObjectDefinition<
 *   'minecraft:notification/players/joined',
 *   [{ player: PlayerObject }]
 * >;
 * ```
 */
export interface NotificationObjectDefinition<
  Name extends string = string,
  Params extends unknown[] = unknown[],
  Result = unknown
> extends Definition<Name, Params, Result> {
  /**
   * Type discriminator to distinguish notifications from methods.
   * 
   * Always set to 'notification' for notification definitions.
   */
  type : 'notification'
}
