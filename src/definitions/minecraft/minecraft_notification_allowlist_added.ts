import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Player was added to allowlist
 */
export type MinecraftNotificationAllowlistAdded = MethodObject<
  'minecraft:notification/allowlist/added',
  [{ player : PlayerObject }]
>
