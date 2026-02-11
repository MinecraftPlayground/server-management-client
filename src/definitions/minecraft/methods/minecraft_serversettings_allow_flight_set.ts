import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Allow or disallow flight for players in Survival mode
 */
export type MinecraftServersettingsAllowFlightSet = MethodObjectDefinition<
  'minecraft:serversettings/allow_flight/set',
  [{ allow : boolean }],
  { allowed? : boolean }
>
