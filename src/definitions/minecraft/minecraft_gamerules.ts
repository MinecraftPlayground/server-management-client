import type { TypedGameRuleObject } from '../../json_rpc/schema/components/schemas/typed_game_rule_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the available game rule keys and their current values
 */
export type MinecraftGamerules = MethodObject<
  'minecraft:gamerules',
  never[],
  { gamerules? : TypedGameRuleObject[] }
>

