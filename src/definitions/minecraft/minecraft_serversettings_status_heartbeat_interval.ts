import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the interval in seconds between server status heartbeats
 */
export type MinecraftServersettingsStatusHeartbeatInterval = MethodObject<
  'minecraft:serversettings/status_heartbeat_interval',
  never[],
  { seconds? : number }
>
