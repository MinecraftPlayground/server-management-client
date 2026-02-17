import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player was removed from ban list
 */
export type MinecraftNotificationBansRemoved = NotificationObjectDefinition<
  'minecraft:notification/bans/removed',
  [{ player : PlayerObject }]
>
