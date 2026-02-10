import type { PlayerObject } from '../components/schemas/player_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Get all connected players
 */
export type MinecraftPlayers = MethodObject<
  'minecraft:players',
  never[],
  { players : PlayerObject[] }
>
