import type { UserBanObject } from '../../components/schemas/user_ban_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Clear all players in ban list
 */
export type BansClear = MethodObject<
  'minecraft:bans/clear',
  never[],
  { banlist? : UserBanObject[] }
>
