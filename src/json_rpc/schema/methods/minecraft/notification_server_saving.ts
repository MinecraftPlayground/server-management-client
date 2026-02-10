import type { MethodObject } from '../../method_object.ts';


/**
 * Server save started
 */
export type MinecraftNotificationServerSaving = MethodObject<
  'minecraft:notification/server/saving',
  never[]
>
