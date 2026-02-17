import type { Definition } from './definition.ts';

/**
 * Definition interface for JSON-RPC methods (request/response pattern).
 * 
 * Extends the base Definition interface with a 'method' type discriminator.
 * Methods follow the request/response pattern where a client sends a request
 * and expects a response from the server.
 * 
 * @template Name Method  name (ex. `'minecraft:players'`)
 * @template Params Tuple type of parameters (ex. `[{ add: PlayerObject[] }]` or `[]`)
 * @template Result Result type (ex. `{ players?: PlayerObject[] }`)
 * 
 * @example
 * ```ts
 * // Method without parameters
 * type GetPlayersMethod = MethodObjectDefinition<
 *   'minecraft:players',
 *   [],
 *   { players?: PlayerObject[] }
 * >;
 * 
 * // Method with parameters
 * type SetDifficultyMethod = MethodObjectDefinition<
 *   'minecraft:serversettings/difficulty/set',
 *   [{ difficulty: Difficulty }],
 *   { difficulty?: Difficulty }
 * >;
 * ```
 */
export interface MethodObjectDefinition<
  Name extends string = string,
  Params extends unknown[] = unknown[],
  Result = unknown
> extends Definition<Name, Params, Result> {
  /**
   * Type discriminator to distinguish methods from notifications.
   * 
   * Always set to 'method' for method definitions.
   */
  type : 'method'
}
