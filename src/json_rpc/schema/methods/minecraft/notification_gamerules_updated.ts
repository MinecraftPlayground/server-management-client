import type { TypedGameRuleObject } from '../../components/schemas/typed_game_rule_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Gamerule was changed
 */
export type MinecraftNotificationGamerulesUpdated = MethodObject<
  'minecraft:notification/gamerules/updated',
  [{ gamerule : TypedGameRuleObject }]
>
