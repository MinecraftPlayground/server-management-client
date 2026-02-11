import type { Difficulty } from '../../json_rpc/schema/components/schemas/difficulty.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Set the difficulty level of the server
 */
export type MinecraftServersettingsDifficultySet = MethodObject<
  'minecraft:serversettings/difficulty/set',
  [{ difficulty : Difficulty }],
  { difficulty? : Difficulty }
>
