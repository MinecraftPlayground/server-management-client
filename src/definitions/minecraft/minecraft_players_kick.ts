import type { KickPlayerObject } from '../../json_rpc/schema/components/schemas/kick_player_object.ts';
import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Kick players
 */
export type MinecraftPlayersKick = MethodObject<
  'minecraft:players/kick',
  [{ kick : KickPlayerObject[] }],
  { kicked? : PlayerObject[] }
>
