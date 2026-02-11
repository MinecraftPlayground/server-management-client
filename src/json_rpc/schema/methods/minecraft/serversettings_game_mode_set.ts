import type { GameType } from '../../components/schemas/game_type.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Set the server's default game mode
 */
export type ServersettingsGameModeSet = MethodObject<
  'minecraft:serversettings/game_mode/set',
  [{ mode : GameType }],
  { mode? : GameType }
>
