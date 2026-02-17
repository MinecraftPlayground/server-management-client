import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable the server responding to connection status requests.
 */
export type MinecraftServersettingsStatusRepliesSet = MethodObjectDefinition<
  'minecraft:serversettings/status_replies/set',
  [{ enable : boolean }],
  /** enabled */
  boolean
>
