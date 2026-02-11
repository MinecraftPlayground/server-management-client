import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Allow or disallow flight for players in Survival mode
 */
export type MinecraftServersettingsAllowFlightSet = MethodObject<
  'minecraft:serversettings/allow_flight/set',
  [{ allow : boolean }],
  { allowed? : boolean }
>
