import type { MethodObject } from '../../method_object.ts';


/**
 * Set the server's message of the day displayed to players
 */
export type ServersettingsMotdSet = MethodObject<
  'minecraft:serversettings/motd/set',
  [{ message : string }],
  { message? : string }
>
