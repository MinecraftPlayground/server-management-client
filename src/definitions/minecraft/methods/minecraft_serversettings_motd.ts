import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the server's message of the day displayed to players.
 */
export type MinecraftServersettingsMotd = MethodObjectDefinition<
  'minecraft:serversettings/motd',
  [],
  /** message */
  string
>
