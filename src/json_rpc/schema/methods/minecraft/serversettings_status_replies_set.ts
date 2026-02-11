import type { MethodObject } from '../../method_object.ts';


/**
 * Enable or disable the server responding to connection status requests
 */
export type ServersettingsStatusRepliesSet = MethodObject<
  'minecraft:serversettings/status_replies/set',
  [{ enable : boolean }],
  { enabled? : boolean }
>
