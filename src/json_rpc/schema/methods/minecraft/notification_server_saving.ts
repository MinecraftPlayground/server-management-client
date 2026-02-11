import type { MethodObject } from '../../method_object.ts';


/**
 * Server save started
 */
export type NotificationServerSaving = MethodObject<
  'minecraft:notification/server/saving',
  never[]
>
