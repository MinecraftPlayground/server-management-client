import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get default operator permission level
 */
export type MinecraftServersettingsOperatorUserPermissionLevel = MethodObjectDefinition<
  'minecraft:serversettings/operator_user_permission_level',
  never[],
  { level? : number }
>
