import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the number of seconds before the game is automatically paused when no players are online.
 */
export type MinecraftServersettingsPauseWhenEmptySeconds = MethodObjectDefinition<
  'minecraft:serversettings/pause_when_empty_seconds',
  [],
  /** seconds */
  number
>
