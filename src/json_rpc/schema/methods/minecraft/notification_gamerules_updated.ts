import type { TypedGameRuleObject } from '../../components/schemas/typed_game_rule_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Gamerule was changed
 */
export type NotificationGamerulesUpdated = MethodObject<
  'minecraft:notification/gamerules/updated',
  [{ gamerule : TypedGameRuleObject }]
>
