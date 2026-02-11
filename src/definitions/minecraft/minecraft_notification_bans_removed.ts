import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Player was removed from ban list
 */
export type MinecraftNotificationBansRemoved = MethodObject<
  'minecraft:notification/bans/removed',
  [{ player : PlayerObject }]
>
