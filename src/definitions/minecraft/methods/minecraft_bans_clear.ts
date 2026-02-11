import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Clear all players in ban list
 */
export type MinecraftBansClear = MethodObjectDefinition<
  'minecraft:bans/clear',
  never[],
  { banlist? : UserBanObject[] }
>
