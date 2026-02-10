import type { PlayerObject } from '../components/schemas/player_object.ts';
import type { UserBanObject } from '../components/schemas/user_ban_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Remove players from ban list
 */
export type MinecraftBansRemove = MethodObject<
  'minecraft:bans/remove',
  [{ remove : PlayerObject[] }],
  { banlist : UserBanObject[] }
>
