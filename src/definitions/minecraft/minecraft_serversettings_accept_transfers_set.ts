import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Enable or disable accepting player transfers from other servers
 */
export type MinecraftServersettingsAcceptTransfersSet = MethodObject<
  'minecraft:serversettings/accept_transfers/set',
  [{ accept : boolean }],
  { accepted? : boolean }
>
