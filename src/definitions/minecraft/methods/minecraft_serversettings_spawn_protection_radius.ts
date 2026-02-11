import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get the spawn protection radius in blocks (only operators can edit within this area)
 */
export type MinecraftServersettingsSpawnProtectionRadius = MethodObjectDefinition<
  'minecraft:serversettings/spawn_protection_radius',
  never[],
  { radius? : number }
>
