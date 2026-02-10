import type { PlayerObject } from '../components/schemas/player_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Player left
 */
export type MinecraftNotificationPlayersLeft = MethodObject<
  'minecraft:notification/players/left',
  [{ player : PlayerObject }]
>
