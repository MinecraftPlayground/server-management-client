import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get the number of seconds before idle players are automatically kicked from the server
 */
export type MinecraftServersettingsPlayerIdleTimeout = MethodObjectDefinition<
  'minecraft:serversettings/player_idle_timeout',
  never[],
  { seconds? : number }
>
