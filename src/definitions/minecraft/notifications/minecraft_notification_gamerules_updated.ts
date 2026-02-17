import type { TypedGameRuleObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Gamerule was changed
 */
export type MinecraftNotificationGamerulesUpdated = NotificationObjectDefinition<
  'minecraft:notification/gamerules/updated',
  [{ gamerule : TypedGameRuleObject }]
>
