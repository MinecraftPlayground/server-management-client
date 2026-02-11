import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Player left
 */
export type MinecraftNotificationPlayersLeft = MethodObject<
  'minecraft:notification/players/left',
  [{ player : PlayerObject }]
>
