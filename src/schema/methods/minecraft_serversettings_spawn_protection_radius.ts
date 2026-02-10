import type { MethodObject } from '../method_object.ts';


/**
 * Get the spawn protection radius in blocks (only operators can edit within this area)
 */
export type MinecraftServersettingsSpawnProtectionRadius = MethodObject<
  'minecraft:serversettings/spawn_protection_radius',
  never[],
  { radius : number }
>
