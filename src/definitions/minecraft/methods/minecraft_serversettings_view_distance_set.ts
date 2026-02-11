import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Set the server's view distance in chunks
 */
export type MinecraftServersettingsViewDistanceSet = MethodObjectDefinition<
  'minecraft:serversettings/view_distance/set',
  [{ distance : number }],
  { distance? : number }
>
