import type { Difficulty } from '../components/schemas/difficulty.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Set the difficulty level of the server
 */
export type MinecraftServersettingsDifficultySet = MethodObject<
  'minecraft:serversettings/difficulty/set',
  [{ difficulty : Difficulty }],
  { difficulty? : Difficulty }
>
