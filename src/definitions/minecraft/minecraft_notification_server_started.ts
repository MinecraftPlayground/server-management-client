import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Server started
 */
export type MinecraftNotificationServerStarted = MethodObject<
  'minecraft:notification/server/started',
  never[]
>
