import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get default operator permission level
 */
export type MinecraftServersettingsOperatorUserPermissionLevel = MethodObject<
  'minecraft:serversettings/operator_user_permission_level',
  never[],
  { level? : number }
>
