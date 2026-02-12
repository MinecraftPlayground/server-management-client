/**
 * Converts never[] to an empty array type [] for better ergonomics.
 * 
 * This utility type is used to handle methods/notifications that don't require parameters.
 * When a method has no parameters, its params type is never[], but for function signatures
 * it's more ergonomic to use `[]` (empty tuple) instead.
 * 
 * @template ParamsObject Params type to transform (either `never[]` or a regular params tuple)
 * 
 * @example
 * ```ts
 * // Without ParamsNever
 * function call1(method: string, ...params: never[]) {
 *   // TypeScript error: A rest parameter cannot be of type 'never[]'
 * }
 * 
 * // With ParamsNever
 * function call2(method: string, ...params: ParamsNever<never[]>) {
 *   // Works! params is [] (empty array)
 * }
 * 
 * // For methods with parameters, it passes through unchanged
 * type WithParams = ParamsNever<[{ add: PlayerObject[] }]>;
 * // [{ add: PlayerObject[] }]
 * 
 * type WithoutParams = ParamsNever<never[]>;
 * // []
 * ```
 * 
 * @example
 * ```ts
 * // Usage in Client.call method
 * public call<MethodName extends Definitions['name']>(
 *   method: MethodName,
 *   ...params: ParamsNever<ExtractParams<Definitions, MethodName>>
 * ) {
 *   // For 'minecraft:players' (params: never[])
 *   // ...params becomes: ...params: []
 *   
 *   // For 'minecraft:allowlist/add' (params: [{ add: PlayerObject[] }])
 *   // ...params becomes: ...params: [{ add: PlayerObject[] }]
 * }
 * 
 * // This allows calling methods without parameters naturally:
 * await client.call('minecraft:players'); // No params needed
 * 
 * // And methods with parameters:
 * await client.call('minecraft:allowlist/add', { add: [...] }); // Params required
 * ```
 */
export type ParamsNever<ParamsObject> = ParamsObject extends never[]
  ? []
  : ParamsObject;
