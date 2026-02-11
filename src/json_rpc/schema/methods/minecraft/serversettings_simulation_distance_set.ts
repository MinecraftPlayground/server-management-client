import type { MethodObject } from '../../method_object.ts';


/**
 * Set the server's simulation distance in chunks
 */
export type ServersettingsSimulationDistanceSet = MethodObject<
  'minecraft:serversettings/simulation_distance/set',
  [{ distance : number }],
  { distance? : number }
>
