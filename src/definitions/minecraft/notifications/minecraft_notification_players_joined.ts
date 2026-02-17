import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player joined
 */
export type MinecraftNotificationPlayersJoined = NotificationObjectDefinition<
  'minecraft:notification/players/joined',
  [{ player : PlayerObject }]
>
