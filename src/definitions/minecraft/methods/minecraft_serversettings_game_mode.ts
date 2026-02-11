import type { GameType } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get the server's default game mode
 */
export type MinecraftServersettingsGameMode = MethodObjectDefinition<
  'minecraft:serversettings/game_mode',
  never[],
  { mode? : GameType }
>
