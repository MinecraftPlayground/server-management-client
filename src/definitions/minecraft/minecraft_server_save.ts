import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Save server state
 */
export type MinecraftServerSave = MethodObject<
  'minecraft:server/save',
  [{ flush : boolean }],
  { saving? : boolean }
>
