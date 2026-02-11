import type { MethodObject } from '../../method_object.ts';


/**
 * Server shutting down
 */
export type NotificationServerStopping = MethodObject<
  'minecraft:notification/server/stopping',
  never[]
>
