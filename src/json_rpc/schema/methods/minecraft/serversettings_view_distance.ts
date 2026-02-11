import type { MethodObject } from '../../method_object.ts';


/**
 * Get the server's view distance in chunks
 */
export type ServersettingsViewDistance = MethodObject<
  'minecraft:serversettings/view_distance',
  never[],
  { distance? : number }
>
