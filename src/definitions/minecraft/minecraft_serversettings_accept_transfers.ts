import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get whether the server accepts player transfers from other servers
 */
export type MinecraftServersettingsAcceptTransfers = MethodObject<
  'minecraft:serversettings/accept_transfers',
  never[],
  { accepted? : boolean }
>
