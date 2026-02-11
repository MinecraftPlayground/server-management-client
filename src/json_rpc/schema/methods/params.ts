/**
 * Extract the params type from a method by its name.
 * If it is never[], return an empty array instead.
 * 
 * @template ParamsObject Params type to extract
 * @example
 * ```ts
 * type AddToAllowlistParams = ParamsNever<'minecraft:allowlist/add'>;
 * // [{ add: PlayerObject[] }]
 * type GetAllowlistParams = ParamsNever<'minecraft:allowlist'>;
 * // []
 * ```
 */
export type ParamsNever<ParamsObject> = ParamsObject extends never[]
  ? []
  : ParamsObject;
