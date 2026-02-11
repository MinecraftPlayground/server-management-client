import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Set the banlist
 */
export type MinecraftBansSet = MethodObjectDefinition<
  'minecraft:bans/set',
  [{ bans : UserBanObject[] }],
  { banlist? : UserBanObject[] }
>
