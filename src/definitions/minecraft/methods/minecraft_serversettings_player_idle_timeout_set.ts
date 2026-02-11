import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Set the number of seconds before idle players are automatically kicked from the server
 */
export type MinecraftServersettingsPlayerIdleTimeoutSet = MethodObjectDefinition<
  'minecraft:serversettings/player_idle_timeout/set',
  [{ seconds : number }],
  { seconds? : number }
>
