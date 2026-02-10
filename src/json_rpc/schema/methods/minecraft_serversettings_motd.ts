import type { MethodObject } from '../method_object.ts';


/**
 * Get the server's message of the day displayed to players
 */
export type MinecraftServersettingsMotd = MethodObject<
  'minecraft:serversettings/motd',
  never[],
  { message? : string }
>
