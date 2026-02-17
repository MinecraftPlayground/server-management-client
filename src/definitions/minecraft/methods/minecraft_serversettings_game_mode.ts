import type { GameType } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the server's default game mode.
 */
export type MinecraftServersettingsGameMode = MethodObjectDefinition<
  'minecraft:serversettings/game_mode',
  [],
  /** mode */
  GameType
>
