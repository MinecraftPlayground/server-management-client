import type { MethodObject } from '../../method_object.ts';


/**
 * Set default operator permission level
 */
export type ServersettingsOperatorUserPermissionLevelSet = MethodObject<
  'minecraft:serversettings/operator_user_permission_level/set',
  [{ level : number }],
  { level? : number }
>
