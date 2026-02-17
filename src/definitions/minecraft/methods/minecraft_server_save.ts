import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Save server state.
 */
export type MinecraftServerSave = MethodObjectDefinition<
  'minecraft:server/save',
  [{ flush : boolean }],
  /** saving */
  boolean
>
