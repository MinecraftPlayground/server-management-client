import type { OperatorObject } from '../../components/schemas/operator_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Get all oped players
 */
export type Operators = MethodObject<
  'minecraft:operators',
  never[],
  { operators? : OperatorObject[] }
>
