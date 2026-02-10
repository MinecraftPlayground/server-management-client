import type { MethodObject } from '../method_object.ts';


/**
 * Set the server's simulation distance in chunks
 */
export type MinecraftServersettingsSimulationDistanceSet = MethodObject<
  'minecraft:serversettings/simulation_distance/set',
  [{ distance : number }],
  { distance : number }
>
