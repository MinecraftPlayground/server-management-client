import type { MethodObject } from '../../method_object.ts';


/**
 * Set the maximum number of players allowed to connect to the server
 */
export type MinecraftServersettingsMaxPlayersSet = MethodObject<
  'minecraft:serversettings/max_players/set',
  [{ max : number }],
  { max? : number }
>
