import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Server save completed
 */
export type MinecraftNotificationServerSaved = MethodObject<
  'minecraft:notification/server/saved',
  never[]
>
