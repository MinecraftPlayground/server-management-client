import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the server's message of the day displayed to players.
 */
export type MinecraftServersettingsMotdSet = MethodObjectDefinition<
  'minecraft:serversettings/motd/set',
  [{ message : string }],
  /** message */
  string
>
