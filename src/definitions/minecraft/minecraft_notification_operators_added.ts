import type { OperatorObject } from '../../json_rpc/schema/components/schemas/operator_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Player was oped
 */
export type MinecraftNotificationOperatorsAdded = MethodObject<
  'minecraft:notification/operators/added',
  [{ player : OperatorObject }]
>
