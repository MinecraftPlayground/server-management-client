import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get whether the server accepts player transfers from other servers
 */
export type MinecraftServersettingsAcceptTransfers = MethodObjectDefinition<
  'minecraft:serversettings/accept_transfers',
  never[],
  { accepted? : boolean }
>
