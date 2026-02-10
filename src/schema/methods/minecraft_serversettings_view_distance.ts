import type { MethodObject } from '../method_object.ts';

/**
 * Get the server's view distance in chunks
 */
export type MinecraftServersettingsViewDistance = MethodObject<
  'minecraft:serversettings/view_distance',
  never[],
  { distance : number }
>
