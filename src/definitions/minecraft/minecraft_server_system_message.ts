import type { SystemMessageObject } from '../../json_rpc/schema/components/schemas/system_message_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Send a system message
 */
export type MinecraftServerSystemMessage = MethodObject<
  'minecraft:server/system_message',
  [{ message : SystemMessageObject }],
  { sent? : boolean }
>
