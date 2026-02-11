import type { MethodObject } from '../../method_object.ts';


/**
 * Server started
 */
export type NotificationServerStarted = MethodObject<
  'minecraft:notification/server/started',
  never[]
>
