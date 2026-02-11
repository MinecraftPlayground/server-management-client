import type { Definition } from './definition.ts';


/**
 * Extract the params type from a method by its name
 * 
 * @template Methods Union of all method objects to extract from
 * @template MethodName Name of the method to extract the params type from
 * @example
 * ```ts
 * type AddToAllowlistParams = ExtractParams<'minecraft:allowlist/add'>;
 * // [{ add: PlayerObject[] }]
 * 
 * type GetAllowlistParams = ExtractParams<'minecraft:allowlist'>;
 * // never[]
 * ```
 */
export type ExtractParams<
  Methods extends Definition,
  MethodName extends string
> = Extract<Methods, { name: MethodName }>['params'];
