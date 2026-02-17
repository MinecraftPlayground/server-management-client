import type { GameType } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the server's default game mode.
 */
export type MinecraftServersettingsGameModeSet = MethodObjectDefinition<
  'minecraft:serversettings/game_mode/set',
  [{ mode : GameType }],
  /** mode */
  GameType
>
