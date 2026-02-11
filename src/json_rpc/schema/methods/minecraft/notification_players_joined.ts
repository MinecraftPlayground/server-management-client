import type { PlayerObject } from '../../components/schemas/player_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Player joined
 */
export type NotificationPlayersJoined = MethodObject<
  'minecraft:notification/players/joined',
  [{ player : PlayerObject }]
>
