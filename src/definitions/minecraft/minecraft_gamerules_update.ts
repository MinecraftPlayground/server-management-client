import type { TypedGameRuleObject } from '../../json_rpc/schema/components/schemas/typed_game_rule_object.ts';
import type { UntypedGameRuleObject } from '../../json_rpc/schema/components/schemas/untyped_game_rule_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Update game rule value
 */
export type MinecraftGamerulesUpdate = MethodObject<
  'minecraft:gamerules/update',
  [{ gamerule : UntypedGameRuleObject }],
  { gamerule? : TypedGameRuleObject }
>
