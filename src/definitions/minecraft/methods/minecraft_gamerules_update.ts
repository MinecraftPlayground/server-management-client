import type { TypedGameRuleObject, UntypedGameRuleObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Update game rule value
 */
export type MinecraftGamerulesUpdate = MethodObjectDefinition<
  'minecraft:gamerules/update',
  [{ gamerule : UntypedGameRuleObject }],
  { gamerule? : TypedGameRuleObject }
>
