import type { KickPlayerObject, PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Kick players
 */
export type MinecraftPlayersKick = MethodObjectDefinition<
  'minecraft:players/kick',
  [{ kick : KickPlayerObject[] }],
  { kicked? : PlayerObject[] }
>
