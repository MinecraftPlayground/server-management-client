import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Player was added to allowlist
 */
export type MinecraftNotificationAllowlistAdded = NotificationObjectDefinition<
  'minecraft:notification/allowlist/added',
  [{ player : PlayerObject }]
>
