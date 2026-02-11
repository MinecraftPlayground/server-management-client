import type { TypedGameRuleObject } from '../../components/schemas/typed_game_rule_object.ts';
import type { UntypedGameRuleObject } from '../../components/schemas/untyped_game_rule_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Update game rule value
 */
export type GamerulesUpdate = MethodObject<
  'minecraft:gamerules/update',
  [{ gamerule : UntypedGameRuleObject }],
  { gamerule? : TypedGameRuleObject }
>
