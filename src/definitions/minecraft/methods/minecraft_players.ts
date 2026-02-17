import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get all connected players.
 */
export type MinecraftPlayers = MethodObjectDefinition<
  'minecraft:players',
  [],
  /** players */
  PlayerObject[]
>
