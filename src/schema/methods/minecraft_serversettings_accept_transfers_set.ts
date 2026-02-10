import type { MethodObject } from '../method_object.ts';


/**
 * Enable or disable accepting player transfers from other servers
 */
export type MinecraftServersettingsAcceptTransfersSet = MethodObject<
  'minecraft:serversettings/accept_transfers/set',
  [{ accept : boolean }],
  { accepted : boolean }
>
