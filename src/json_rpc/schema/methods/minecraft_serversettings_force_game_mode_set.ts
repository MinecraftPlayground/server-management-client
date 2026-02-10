import type { MethodObject } from '../method_object.ts';


/**
 * Enable or disable forcing players to use the server's default game mode
 */
export type MinecraftServersettingsForceGameModeSet = MethodObject<
  'minecraft:serversettings/force_game_mode/set',
  [{ force : boolean }],
  { forced? : boolean }
>
