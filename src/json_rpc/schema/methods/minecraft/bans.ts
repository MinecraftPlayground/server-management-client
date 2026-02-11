import type { UserBanObject } from '../../components/schemas/user_ban_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Get the ban list
 */
export type Bans = MethodObject<
  'minecraft:bans',
  never[],
  { banlist? : UserBanObject[] }
>
