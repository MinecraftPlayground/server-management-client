import type { MethodObject } from '../../method_object.ts';


/**
 * Get whether the server responds to connection status requests
 */
export type ServersettingsStatusReplies = MethodObject<
  'minecraft:serversettings/status_replies',
  never[],
  { enabled? : boolean }
>
