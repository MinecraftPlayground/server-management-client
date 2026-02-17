import type { OperatorObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player was deoped
 */
export type MinecraftNotificationOperatorsRemoved = NotificationObjectDefinition<
  'minecraft:notification/operators/removed',
  [{ player : OperatorObject }]
>
