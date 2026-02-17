import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set default operator permission level.
 */
export type MinecraftServersettingsOperatorUserPermissionLevelSet = MethodObjectDefinition<
  'minecraft:serversettings/operator_user_permission_level/set',
  [{ level : number }],
  /** level */
  number
>
