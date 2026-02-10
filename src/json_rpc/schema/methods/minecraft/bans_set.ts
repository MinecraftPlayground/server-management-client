import type { UserBanObject } from '../../components/schemas/user_ban_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Set the banlist
 */
export type MinecraftBansSet = MethodObject<
  'minecraft:bans/set',
  [{ bans : UserBanObject[] }],
  { banlist? : UserBanObject[] }
>
