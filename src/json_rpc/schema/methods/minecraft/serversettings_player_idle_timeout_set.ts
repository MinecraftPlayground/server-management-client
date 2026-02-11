import type { MethodObject } from '../../method_object.ts';


/**
 * Set the number of seconds before idle players are automatically kicked from the server
 */
export type ServersettingsPlayerIdleTimeoutSet = MethodObject<
  'minecraft:serversettings/player_idle_timeout/set',
  [{ seconds : number }],
  { seconds? : number }
>
