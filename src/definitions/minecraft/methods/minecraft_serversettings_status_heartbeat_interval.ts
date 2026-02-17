import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the interval in seconds between server status heartbeats.
 */
export type MinecraftServersettingsStatusHeartbeatInterval = MethodObjectDefinition<
  'minecraft:serversettings/status_heartbeat_interval',
  [],
  /** seconds */
  number
>
