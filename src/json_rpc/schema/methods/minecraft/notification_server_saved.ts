import type { MethodObject } from '../../method_object.ts';


/**
 * Server save completed
 */
export type NotificationServerSaved = MethodObject<
  'minecraft:notification/server/saved',
  never[]
>
