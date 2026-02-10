import type { OperatorObject } from '../../components/schemas/operator_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Player was oped
 */
export type MinecraftNotificationOperatorsAdded = MethodObject<
  'minecraft:notification/operators/added',
  [{ player : OperatorObject }]
>
