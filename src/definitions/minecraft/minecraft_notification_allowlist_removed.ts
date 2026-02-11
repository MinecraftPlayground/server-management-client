import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Player was removed from allowlist
 */
export type MinecraftNotificationAllowlistRemoved = MethodObject<
  'minecraft:notification/allowlist/removed',
  [{ player : PlayerObject }]
>
