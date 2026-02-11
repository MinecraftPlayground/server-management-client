import type { TypedGameRuleObject } from '../../json_rpc/schema/components/schemas/typed_game_rule_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Gamerule was changed
 */
export type MinecraftNotificationGamerulesUpdated = MethodObject<
  'minecraft:notification/gamerules/updated',
  [{ gamerule : TypedGameRuleObject }]
>
