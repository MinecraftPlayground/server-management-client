import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the server's simulation distance in chunks.
 */
export type MinecraftServersettingsSimulationDistanceSet = MethodObjectDefinition<
  'minecraft:serversettings/simulation_distance/set',
  [{ distance : number }],
  /** distance */
  number
>
