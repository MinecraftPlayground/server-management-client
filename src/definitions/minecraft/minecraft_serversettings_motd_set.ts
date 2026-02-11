import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Set the server's message of the day displayed to players
 */
export type MinecraftServersettingsMotdSet = MethodObject<
  'minecraft:serversettings/motd/set',
  [{ message : string }],
  { message? : string }
>
