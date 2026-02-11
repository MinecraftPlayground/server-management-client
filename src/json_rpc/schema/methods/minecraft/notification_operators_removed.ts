import type { OperatorObject } from '../../components/schemas/operator_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Player was deoped
 */
export type MinecraftNotificationOperatorsRemoved = MethodObject<
  'minecraft:notification/operators/removed',
  [{ player : OperatorObject }]
>
