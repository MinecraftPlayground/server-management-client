import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { UserBanObject } from '../../json_rpc/schema/components/schemas/user_ban_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Remove players from ban list
 */
export type MinecraftBansRemove = MethodObject<
  'minecraft:bans/remove',
  [{ remove : PlayerObject[] }],
  { banlist? : UserBanObject[] }
>
