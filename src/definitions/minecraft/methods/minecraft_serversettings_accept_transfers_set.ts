import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable accepting player transfers from other servers.
 */
export type MinecraftServersettingsAcceptTransfersSet = MethodObjectDefinition<
  'minecraft:serversettings/accept_transfers/set',
  [{ accept : boolean }],
  /** accepted */
  boolean
>
