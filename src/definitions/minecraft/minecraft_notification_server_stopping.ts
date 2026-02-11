import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Server shutting down
 */
export type MinecraftNotificationServerStopping = MethodObject<
  'minecraft:notification/server/stopping',
  never[]
>
