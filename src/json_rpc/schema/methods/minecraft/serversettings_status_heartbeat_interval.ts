import type { MethodObject } from '../../method_object.ts';


/**
 * Get the interval in seconds between server status heartbeats
 */
export type MinecraftServersettingsStatusHeartbeatInterval = MethodObject<
  'minecraft:serversettings/status_heartbeat_interval',
  never[],
  { seconds? : number }
>
