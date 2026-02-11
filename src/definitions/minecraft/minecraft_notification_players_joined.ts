import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Player joined
 */
export type MinecraftNotificationPlayersJoined = MethodObject<
  'minecraft:notification/players/joined',
  [{ player : PlayerObject }]
>
