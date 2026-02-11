import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Set default operator permission level
 */
export type MinecraftServersettingsOperatorUserPermissionLevelSet = MethodObject<
  'minecraft:serversettings/operator_user_permission_level/set',
  [{ level : number }],
  { level? : number }
>
