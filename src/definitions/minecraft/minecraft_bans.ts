import type { UserBanObject } from '../../json_rpc/schema/components/schemas/user_ban_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the ban list
 */
export type MinecraftBans = MethodObject<
  'minecraft:bans',
  never[],
  { banlist? : UserBanObject[] }
>
