import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the spawn protection radius in blocks (only operators can edit within this area).
 */
export type MinecraftServersettingsSpawnProtectionRadius = MethodObjectDefinition<
  'minecraft:serversettings/spawn_protection_radius',
  [],
  /** radius */
  number
>
