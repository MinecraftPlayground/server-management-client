import type { MethodObject } from '../method_object.ts';


/**
 * Get the entity broadcast range as a percentage
 */
export type MinecraftServersettingsEntityBroadcastRange = MethodObject<
  'minecraft:serversettings/entity_broadcast_range',
  never[],
  { percentage_points : number }
>
