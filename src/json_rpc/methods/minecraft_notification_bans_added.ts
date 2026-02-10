import type { UserBanObject } from '../components/schemas/user_ban_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Player was added to ban list
 */
export type MinecraftNotificationBansAdded = MethodObject<
  'minecraft:notification/bans/added',
  [{ player : UserBanObject }]
>
