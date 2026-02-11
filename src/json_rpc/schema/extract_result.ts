import type { Definition } from './definition.ts';


/**
 * Extract the result type from a method by its name
 * 
 * @template Methods Union of all method objects to extract from
 * @template MethodName Name of the method to extract the result type from
 * @example
 * ```ts 
 * type GetAllowlistResult = ExtractResult<'minecraft:allowlist'>;
 * // { allowlist?: PlayerObject[] }
 * ```
 */
export type ExtractResult<
  Methods extends Definition,
  MethodName extends string
> = Extract<Methods, { name: MethodName }>['result'];
