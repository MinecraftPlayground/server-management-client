import type { MethodObject } from '../method_object.ts';


/**
 * Get whether the server hides online player information from status queries
 */
export type MinecraftServersettingsHideOnlinePlayers = MethodObject<
  'minecraft:serversettings/hide_online_players',
  never[],
  { hidden : boolean }
>
