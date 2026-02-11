import type { Difficulty } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Set the difficulty level of the server
 */
export type MinecraftServersettingsDifficultySet = MethodObjectDefinition<
  'minecraft:serversettings/difficulty/set',
  [{ difficulty : Difficulty }],
  { difficulty? : Difficulty }
>
