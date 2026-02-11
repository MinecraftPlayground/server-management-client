import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Enable or disable hiding online player information from status queries
 */
export type MinecraftServersettingsHideOnlinePlayersSet = MethodObjectDefinition<
  'minecraft:serversettings/hide_online_players/set',
  [{ hide : boolean }],
  { hidden? : boolean }
>
