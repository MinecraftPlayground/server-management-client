import type { MethodObject } from '../method_object.ts';


/**
 * Server started
 */
export type MinecraftNotificationServerStarted = MethodObject<
  'minecraft:notification/server/started',
  never[]
>
