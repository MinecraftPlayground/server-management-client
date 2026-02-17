import type { OperatorObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player was oped
 */
export type MinecraftNotificationOperatorsAdded = NotificationObjectDefinition<
  'minecraft:notification/operators/added',
  [{ player : OperatorObject }]
>
