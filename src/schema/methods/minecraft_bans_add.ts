import type { UserBanObject } from '../components/schemas/user_ban_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Add players to ban list
 */
export type MinecraftBansAdd = MethodObject<
  'minecraft:bans/add',
  [{ add : UserBanObject[] }],
  { banlist : UserBanObject[] }
>
