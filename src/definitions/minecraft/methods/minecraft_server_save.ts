import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Save server state
 */
export type MinecraftServerSave = MethodObjectDefinition<
  'minecraft:server/save',
  [{ flush : boolean }],
  { saving? : boolean }
>
