import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get the server's message of the day displayed to players
 */
export type MinecraftServersettingsMotd = MethodObjectDefinition<
  'minecraft:serversettings/motd',
  never[],
  { message? : string }
>
