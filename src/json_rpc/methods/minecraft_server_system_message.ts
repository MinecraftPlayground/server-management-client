import type { SystemMessageObject } from '../components/schemas/system_message_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Send a system message
 */
export type MinecraftServerSystemMessage = MethodObject<
  'minecraft:server/system_message',
  [{ message : SystemMessageObject }],
  { sent? : boolean }
>
