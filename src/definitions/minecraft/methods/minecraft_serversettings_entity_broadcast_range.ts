import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get the entity broadcast range as a percentage
 */
export type MinecraftServersettingsEntityBroadcastRange = MethodObjectDefinition<
  'minecraft:serversettings/entity_broadcast_range',
  never[],
  { percentage_points? : number }
>
