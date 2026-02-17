import type { Difficulty } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the current difficulty level of the server.
 */
export type MinecraftServersettingsDifficulty = MethodObjectDefinition<
  'minecraft:serversettings/difficulty',
  [],
  /** difficulty */
  Difficulty
>
