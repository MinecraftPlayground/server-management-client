import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Stop server.
 */
export type MinecraftServerStop = MethodObjectDefinition<
  'minecraft:server/stop',
  [],
  /** stopping */
  boolean
>
