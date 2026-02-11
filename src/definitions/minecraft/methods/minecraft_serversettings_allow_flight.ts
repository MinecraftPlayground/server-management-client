import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get whether flight is allowed for players in Survival mode
 */
export type MinecraftServersettingsAllowFlight = MethodObjectDefinition<
  'minecraft:serversettings/allow_flight',
  never[],
  { allowed? : boolean }
>
