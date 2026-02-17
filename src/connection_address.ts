/**
 * Valid connection address type.
 */
export type ConnectionAddress =
  | `ws://${string}${string}`
  | `wss://${string}${string}`
