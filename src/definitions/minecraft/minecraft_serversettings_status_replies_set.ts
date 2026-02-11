import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Enable or disable the server responding to connection status requests
 */
export type MinecraftServersettingsStatusRepliesSet = MethodObject<
  'minecraft:serversettings/status_replies/set',
  [{ enable : boolean }],
  { enabled? : boolean }
>
