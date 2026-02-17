/**
 * Base definition interface for JSON-RPC methods and notifications.
 * 
 * This is the foundation for all JSON-RPC method and notification definitions,
 * providing the core structure with method name, parameters, and result type.
 * 
 * This interface should not be used directly. Instead, use:
 * - {@link MethodObjectDefinition} for request/response methods
 * - {@link NotificationObjectDefinition} for server-initiated notifications
 * 
 * @template Name Method or notification name (ex. `'minecraft:players'`)
 * @template Params Tuple type of parameters (ex. `[{ add: PlayerObject[] }]` or `[]`)
 * @template Result Result type (ex. `{ players?: PlayerObject[] }`)
 * 
 * @see {@link MethodObjectDefinition} for method definitions
 * @see {@link NotificationObjectDefinition} for notification definitions
 */
export interface Definition<
  Name extends string = string,
  Params extends unknown[] = unknown[],
  Result = unknown
> {
  /**
   * The method or notification name.
   * 
   * Should follow the pattern 'namespace:resource/action' for methods
   * or 'namespace:notification/resource/event' for notifications.
   */
  name : Name,
  
  /**
   * Tuple of parameters for this method or notification.
   * 
   * Use [] for methods/notifications without parameters.
   */
  params : Params,
  
  /**
   * The result type for this method or notification.
   * 
   * For methods, this is the response payload.
   * For notifications, this can be unknown as notifications don't have responses.
   */
  result : Result
}
