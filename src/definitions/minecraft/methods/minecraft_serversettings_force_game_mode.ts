import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether players are forced to use the server's default game mode.
 */
export type MinecraftServersettingsForceGameMode = MethodObjectDefinition<
  'minecraft:serversettings/force_game_mode',
  [],
  /** forced */
  boolean
>
