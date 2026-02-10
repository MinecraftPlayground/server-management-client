import type { PlayerObject } from '../components/schemas/player_object.ts';
import type { MethodObject } from '../method_object.ts';

/**
 * Player was added to allowlist
 */
export type MinecraftNotificationAllowlistAdded = MethodObject<
  'minecraft:notification/allowlist/added',
  [{ player : PlayerObject }]
>
