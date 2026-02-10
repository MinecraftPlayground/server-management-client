import type { KickPlayerObject } from '../components/schemas/kick_player_object.ts';
import type { PlayerObject } from '../components/schemas/player_object.ts';
import type { MethodObject } from '../method_object.ts';

/**
 * Kick players
 */
export type MinecraftPlayersKick = MethodObject<
  'minecraft:players/kick',
  [{ kick : KickPlayerObject[] }],
  { kicked : PlayerObject[] }
>
