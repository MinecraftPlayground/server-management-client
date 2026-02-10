import type { GameType } from '../components/schemas/game_type.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Get the server's default game mode
 */
export type MinecraftServersettingsGameMode = MethodObject<
  'minecraft:serversettings/game_mode',
  never[],
  { mode : GameType }
>
