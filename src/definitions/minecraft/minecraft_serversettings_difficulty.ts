import type { Difficulty } from '../../json_rpc/schema/components/schemas/difficulty.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the current difficulty level of the server
 */
export type MinecraftServersettingsDifficulty = MethodObject<
  'minecraft:serversettings/difficulty',
  never[],
  { difficulty? : Difficulty }
>
