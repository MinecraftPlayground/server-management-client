import type { SystemMessageObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Send a system message
 */
export type MinecraftServerSystemMessage = MethodObjectDefinition<
  'minecraft:server/system_message',
  [{ message : SystemMessageObject }],
  { sent? : boolean }
>
