import type { Difficulty } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get the current difficulty level of the server
 */
export type MinecraftServersettingsDifficulty = MethodObjectDefinition<
  'minecraft:serversettings/difficulty',
  never[],
  { difficulty? : Difficulty }
>
