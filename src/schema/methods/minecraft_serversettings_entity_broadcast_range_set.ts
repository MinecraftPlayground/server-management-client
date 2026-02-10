import type { MethodObject } from '../method_object.ts';

/**
 * Set the entity broadcast range as a percentage
 */
export type MinecraftServersettingsEntityBroadcastRangeSet = MethodObject<
  'minecraft:serversettings/entity_broadcast_range/set',
  [{ percentage_points : number }],
  { percentage_points : number }
>
