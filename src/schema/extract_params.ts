import type { Definition } from './definition.ts';


/**
 * Extract the params type from a method or notification by its name.
 * 
 * This utility type searches through a union of Definition types and extracts
 * the params property of the matching method/notification.
 * 
 * @template Definitions Union of all method/notification objects to extract from
 * @template Name Name of the method/notification to extract the params type from
 * 
 * @example
 * ```ts
 * import type { minecraft } from './definitions/index.ts';
 * 
 * // Extract params for a method with parameters
 * type AddToAllowlistParams = ExtractParams<minecraft.All, 'minecraft:allowlist/add'>;
 * // [{ add: PlayerObject[] }]
 * 
 * // Extract params for a method without parameters
 * type GetAllowlistParams = ExtractParams<minecraft.All, 'minecraft:allowlist'>;
 * // []
 * 
 * // Extract params for a notification with parameters
 * type PlayerJoinedParams = ExtractParams<
 *   minecraft.All,
 *   'minecraft:notification/players/joined'
 * >;
 * // [{ player: PlayerObject }]
 * 
 * // Usage in function signature
 * function handleCall<Name extends minecraft.All['name']>(
 *   method: Name,
 *   ...params: ExtractParams<minecraft.All, Name>
 * ) {
 *   // params are type-safe based on the method name
 * }
 * ```
 */
export type ExtractParams<
  Definitions extends Definition,
  Name extends string
> = Extract<Definitions, { name: Name }>['params'];
