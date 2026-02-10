import type { Difficulty } from '../components/schemas/difficulty.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Get the current difficulty level of the server
 */
export type MinecraftServersettingsDifficulty = MethodObject<
  'minecraft:serversettings/difficulty',
  never[],
  { difficulty? : Difficulty }
>
