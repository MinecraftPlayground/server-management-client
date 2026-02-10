import type { MethodNames } from './schema/methods/minecraft/index.ts';

export interface NotificationObject {
  jsonrpc : '2.0',
  // deno-lint-ignore ban-types
  method : MethodNames | (string & {}),
  params? : unknown
  id? : never
}
