import type { MethodObject } from '../../method_object.ts';


/**
 * Get the number of seconds before idle players are automatically kicked from the server
 */
export type ServersettingsPlayerIdleTimeout = MethodObject<
  'minecraft:serversettings/player_idle_timeout',
  never[],
  { seconds? : number }
>
