import type { UserBanObject } from '../../json_rpc/schema/components/schemas/user_ban_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Player was added to ban list
 */
export type MinecraftNotificationBansAdded = MethodObject<
  'minecraft:notification/bans/added',
  [{ player : UserBanObject }]
>
