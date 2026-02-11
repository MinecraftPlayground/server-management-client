import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Enable or disable accepting player transfers from other servers
 */
export type MinecraftServersettingsAcceptTransfersSet = MethodObjectDefinition<
  'minecraft:serversettings/accept_transfers/set',
  [{ accept : boolean }],
  { accepted? : boolean }
>
