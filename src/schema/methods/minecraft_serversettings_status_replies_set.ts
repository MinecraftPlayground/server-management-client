import type { MethodObject } from '../method_object.ts';

/**
 * Enable or disable the server responding to connection status requests
 */
export type MinecraftServersettingsStatusRepliesSet = MethodObject<
  'minecraft:serversettings/status_replies/set',
  [{ enable : boolean }],
  { enabled : boolean }
>
