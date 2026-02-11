import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the maximum number of players allowed to connect to the server
 */
export type MinecraftServersettingsMaxPlayers = MethodObject<
  'minecraft:serversettings/max_players',
  never[],
  { max? : number }
>
