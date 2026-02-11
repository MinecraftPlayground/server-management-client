import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Stop server
 */
export type MinecraftServerStop = MethodObjectDefinition<
  'minecraft:server/stop',
  never[],
  { stopping? : boolean }
>
