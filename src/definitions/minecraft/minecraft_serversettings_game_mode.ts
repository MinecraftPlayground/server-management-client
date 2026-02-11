import type { GameType } from '../../json_rpc/schema/components/schemas/game_type.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the server's default game mode
 */
export type MinecraftServersettingsGameMode = MethodObject<
  'minecraft:serversettings/game_mode',
  never[],
  { mode? : GameType }
>
