import type { GameType } from '../../json_rpc/schema/components/schemas/game_type.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Set the server's default game mode
 */
export type MinecraftServersettingsGameModeSet = MethodObject<
  'minecraft:serversettings/game_mode/set',
  [{ mode : GameType }],
  { mode? : GameType }
>
