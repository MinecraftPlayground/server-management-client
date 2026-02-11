import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Add players to ban list
 */
export type MinecraftBansAdd = MethodObjectDefinition<
  'minecraft:bans/add',
  [{ add : UserBanObject[] }],
  { banlist? : UserBanObject[] }
>
