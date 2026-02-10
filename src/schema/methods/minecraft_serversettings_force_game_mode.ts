import type { MethodObject } from '../method_object.ts';


/**
 * Get whether players are forced to use the server's default game mode
 */
export type MinecraftServersettingsForceGameMode = MethodObject<
  'minecraft:serversettings/force_game_mode',
  never[],
  { forced : boolean }
>
