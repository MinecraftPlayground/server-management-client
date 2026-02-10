import type { PlayerObject } from '../components/schemas/player_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Player was removed from ban list
 */
export type MinecraftNotificationBansRemoved = MethodObject<
  'minecraft:notification/bans/removed',
  [{ player : PlayerObject }]
>
