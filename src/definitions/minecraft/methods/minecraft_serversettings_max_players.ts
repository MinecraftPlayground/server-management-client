import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the maximum number of players allowed to connect to the server.
 */
export type MinecraftServersettingsMaxPlayers = MethodObjectDefinition<
  'minecraft:serversettings/max_players',
  [],
  /** max */
  number
>
