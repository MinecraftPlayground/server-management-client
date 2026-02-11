import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get all oped players
 */
export type MinecraftOperators = MethodObjectDefinition<
  'minecraft:operators',
  never[],
  { operators? : OperatorObject[] }
>
