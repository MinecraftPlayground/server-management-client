import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the maximum number of players allowed to connect to the server.
 */
export type MinecraftServersettingsMaxPlayersSet = MethodObjectDefinition<
  'minecraft:serversettings/max_players/set',
  [{ max : number }],
  /** max */
  number
>
