import type { MethodObject } from '../../method_object.ts';


/**
 * Enable or disable hiding online player information from status queries
 */
export type MinecraftServersettingsHideOnlinePlayersSet = MethodObject<
  'minecraft:serversettings/hide_online_players/set',
  [{ hide : boolean }],
  { hidden? : boolean }
>
