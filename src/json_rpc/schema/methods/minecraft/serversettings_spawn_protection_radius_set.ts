import type { MethodObject } from '../../method_object.ts';


/**
 * Set the spawn protection radius in blocks (only operators can edit within this area)
 */
export type ServersettingsSpawnProtectionRadiusSet = MethodObject<
  'minecraft:serversettings/spawn_protection_radius/set',
  [{ radius : number }],
  { radius? : number }
>
