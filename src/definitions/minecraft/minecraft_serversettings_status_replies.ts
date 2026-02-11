import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get whether the server responds to connection status requests
 */
export type MinecraftServersettingsStatusReplies = MethodObject<
  'minecraft:serversettings/status_replies',
  never[],
  { enabled? : boolean }
>
