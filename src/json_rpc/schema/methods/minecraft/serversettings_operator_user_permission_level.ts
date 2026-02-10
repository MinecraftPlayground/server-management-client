import type { MethodObject } from '../../method_object.ts';


/**
 * Get default operator permission level
 */
export type MinecraftServersettingsOperatorUserPermissionLevel = MethodObject<
  'minecraft:serversettings/operator_user_permission_level',
  never[],
  { level? : number }
>
