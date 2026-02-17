import type { UserBanObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player was added to ban list
 */
export type MinecraftNotificationBansAdded = NotificationObjectDefinition<
  'minecraft:notification/bans/added',
  [{ player : UserBanObject }]
>
