import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the number of seconds before idle players are automatically kicked from the server
 */
export type MinecraftServersettingsPlayerIdleTimeout = MethodObject<
  'minecraft:serversettings/player_idle_timeout',
  never[],
  { seconds? : number }
>
