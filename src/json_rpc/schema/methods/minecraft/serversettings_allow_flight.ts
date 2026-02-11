import type { MethodObject } from '../../method_object.ts';


/**
 * Get whether flight is allowed for players in Survival mode
 */
export type ServersettingsAllowFlight = MethodObject<
  'minecraft:serversettings/allow_flight',
  never[],
  { allowed? : boolean }
>
