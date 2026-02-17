import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the entity broadcast range as a percentage.
 */
export type MinecraftServersettingsEntityBroadcastRangeSet = MethodObjectDefinition<
  'minecraft:serversettings/entity_broadcast_range/set',
  [{ percentage_points : number }],
  /** percentage_points */
  number
>
