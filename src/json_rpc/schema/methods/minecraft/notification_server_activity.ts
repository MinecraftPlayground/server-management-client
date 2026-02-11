import type { MethodObject } from '../../method_object.ts';


/**
 * Server activity occurred. Rate limited to 1 notification per 30 seconds
 */
export type NotificationServerActivity = MethodObject<
  'minecraft:notification/server/activity',
  never[]
>
