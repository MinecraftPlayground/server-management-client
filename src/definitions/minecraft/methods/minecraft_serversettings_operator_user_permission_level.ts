import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get default operator permission level.
 */
export type MinecraftServersettingsOperatorUserPermissionLevel = MethodObjectDefinition<
  'minecraft:serversettings/operator_user_permission_level',
  [],
  /** level */
  number
>
