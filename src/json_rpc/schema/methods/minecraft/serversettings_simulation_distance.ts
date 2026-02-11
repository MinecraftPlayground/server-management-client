import type { MethodObject } from '../../method_object.ts';


/**
 * Get the server's simulation distance in chunks
 */
export type ServersettingsSimulationDistance = MethodObject<
  'minecraft:serversettings/simulation_distance',
  never[],
  { distance? : number }
>
