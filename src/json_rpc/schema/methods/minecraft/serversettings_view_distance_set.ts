import type { MethodObject } from '../../method_object.ts';


/**
 * Set the server's view distance in chunks
 */
export type ServersettingsViewDistanceSet = MethodObject<
  'minecraft:serversettings/view_distance/set',
  [{ distance : number }],
  { distance? : number }
>
