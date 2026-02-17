import type { Definition } from './definition.ts';


/**
 * Extract the result type from a method or notification by its name.
 * 
 * This utility type searches through a union of Definition types and extracts
 * the result property of the matching method/notification.
 * 
 * @template Definitions Union of all method/notification objects to extract from
 * @template Name Name of the method/notification to extract the result type from
 * 
 * @example
 * ```ts
 * import type { minecraft } from './definitions/index.ts';
 * 
 * // Extract result for a method
 * type GetAllowlistResult = ExtractResult<minecraft.All, 'minecraft:allowlist'>;
 * // { allowlist?: PlayerObject[] }
 * 
 * type GetPlayersResult = ExtractResult<minecraft.All, 'minecraft:players'>;
 * // { players?: PlayerObject[] }
 * 
 * type SetDifficultyResult = ExtractResult<
 *   minecraft.All,
 *   'minecraft:serversettings/difficulty/set'
 * >;
 * // { difficulty?: Difficulty }
 * 
 * // Usage in Promise return type
 * async function callMethod<Name extends minecraft.All['name']>(
 *   method: Name
 * ): Promise<ExtractResult<minecraft.All, Name>> {
 *   // Return type is automatically inferred based on method name
 *   return await client.call(method);
 * }
 * 
 * await callMethod('minecraft:players');
 * // { players?: PlayerObject[] }
 * ```
 */
export type ExtractResult<
  Definitions extends Definition,
  Name extends string
> = Extract<Definitions, { name: Name }>['result'];
