import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the server's view distance in chunks.
 */
export type MinecraftServersettingsViewDistanceSet = MethodObjectDefinition<
  'minecraft:serversettings/view_distance/set',
  [{ distance : number }],
  /** distance */
  number
>
