import type { UserBanObject } from '../components/schemas/user_ban_object.ts';
import type { MethodObject } from '../method_object.ts';

/**
 * Clear all players in ban list
 */
export type MinecraftBansClear = MethodObject<
  'minecraft:bans/clear',
  never[],
  { banlist : UserBanObject[] }
>
