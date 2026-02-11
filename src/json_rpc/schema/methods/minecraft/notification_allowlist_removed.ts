import type { PlayerObject } from '../../components/schemas/player_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Player was removed from allowlist
 */
export type NotificationAllowlistRemoved = MethodObject<
  'minecraft:notification/allowlist/removed',
  [{ player : PlayerObject }]
>
