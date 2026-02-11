import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Server save started
 */
export type MinecraftNotificationServerSaving = MethodObject<
  'minecraft:notification/server/saving',
  never[]
>
