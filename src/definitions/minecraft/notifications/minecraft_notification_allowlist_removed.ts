import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Player was removed from allowlist
 */
export type MinecraftNotificationAllowlistRemoved = NotificationObjectDefinition<
  'minecraft:notification/allowlist/removed',
  [{ player : PlayerObject }]
>
