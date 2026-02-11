import type { MinecraftAllowlist } from './methods/minecraft_allowlist.ts';
import type { MinecraftAllowlistAdd } from './methods/minecraft_allowlist_add.ts';
import type { MinecraftAllowlistClear } from './methods/minecraft_allowlist_clear.ts';
import type { MinecraftAllowlistRemove } from './methods/minecraft_allowlist_remove.ts';
import type { MinecraftAllowlistSet } from './methods/minecraft_allowlist_set.ts';
import type { MinecraftBans } from './methods/minecraft_bans.ts';
import type { MinecraftBansAdd } from './methods/minecraft_bans_add.ts';
import type { MinecraftBansClear } from './methods/minecraft_bans_clear.ts';
import type { MinecraftBansRemove } from './methods/minecraft_bans_remove.ts';
import type { MinecraftBansSet } from './methods/minecraft_bans_set.ts';
import type { MinecraftGamerules } from './methods/minecraft_gamerules.ts';
import type { MinecraftGamerulesUpdate } from './methods/minecraft_gamerules_update.ts';
import type { MinecraftIpBans } from './methods/minecraft_ip_bans.ts';
import type { MinecraftIpBansAdd } from './methods/minecraft_ip_bans_add.ts';
import type { MinecraftIpBansClear } from './methods/minecraft_ip_bans_clear.ts';
import type { MinecraftIpBansRemove } from './methods/minecraft_ip_bans_remove.ts';
import type { MinecraftIpBansSet } from './methods/minecraft_ip_bans_set.ts';
import type { MinecraftOperators } from './methods/minecraft_operators.ts';
import type { MinecraftOperatorsAdd } from './methods/minecraft_operators_add.ts';
import type { MinecraftOperatorsClear } from './methods/minecraft_operators_clear.ts';
import type { MinecraftOperatorsRemove } from './methods/minecraft_operators_remove.ts';
import type { MinecraftOperatorsSet } from './methods/minecraft_operators_set.ts';
import type { MinecraftPlayers } from './methods/minecraft_players.ts';
import type { MinecraftPlayersKick } from './methods/minecraft_players_kick.ts';
import type { MinecraftServerSave } from './methods/minecraft_server_save.ts';
import type { MinecraftServerStatus } from './methods/minecraft_server_status.ts';
import type { MinecraftServerStop } from './methods/minecraft_server_stop.ts';
import type { MinecraftServerSystemMessage } from './methods/minecraft_server_system_message.ts';
import type { MinecraftServersettingsAcceptTransfers } from './methods/minecraft_serversettings_accept_transfers.ts';
import type { MinecraftServersettingsAcceptTransfersSet } from './methods/minecraft_serversettings_accept_transfers_set.ts';
import type { MinecraftServersettingsAllowFlight } from './methods/minecraft_serversettings_allow_flight.ts';
import type { MinecraftServersettingsAllowFlightSet } from './methods/minecraft_serversettings_allow_flight_set.ts';
import type { MinecraftServersettingsAutosave } from './methods/minecraft_serversettings_autosave.ts';
import type { MinecraftServersettingsAutosaveSet } from './methods/minecraft_serversettings_autosave_set.ts';
import type { MinecraftServersettingsDifficulty } from './methods/minecraft_serversettings_difficulty.ts';
import type { MinecraftServersettingsDifficultySet } from './methods/minecraft_serversettings_difficulty_set.ts';
import type { MinecraftServersettingsEnforceAllowlist } from './methods/minecraft_serversettings_enforce_allowlist.ts';
import type { MinecraftServersettingsEnforceAllowlistSet } from './methods/minecraft_serversettings_enforce_allowlist_set.ts';
import type { MinecraftServersettingsEntityBroadcastRange } from './methods/minecraft_serversettings_entity_broadcast_range.ts';
import type { MinecraftServersettingsEntityBroadcastRangeSet } from './methods/minecraft_serversettings_entity_broadcast_range_set.ts';
import type { MinecraftServersettingsForceGameMode } from './methods/minecraft_serversettings_force_game_mode.ts';
import type { MinecraftServersettingsForceGameModeSet } from './methods/minecraft_serversettings_force_game_mode_set.ts';
import type { MinecraftServersettingsGameMode } from './methods/minecraft_serversettings_game_mode.ts';
import type { MinecraftServersettingsGameModeSet } from './methods/minecraft_serversettings_game_mode_set.ts';
import type { MinecraftServersettingsHideOnlinePlayers } from './methods/minecraft_serversettings_hide_online_players.ts';
import type { MinecraftServersettingsHideOnlinePlayersSet } from './methods/minecraft_serversettings_hide_online_players_set.ts';
import type { MinecraftServersettingsMaxPlayers } from './methods/minecraft_serversettings_max_players.ts';
import type { MinecraftServersettingsMaxPlayersSet } from './methods/minecraft_serversettings_max_players_set.ts';
import type { MinecraftServersettingsMotd } from './methods/minecraft_serversettings_motd.ts';
import type { MinecraftServersettingsMotdSet } from './methods/minecraft_serversettings_motd_set.ts';
import type { MinecraftServersettingsOperatorUserPermissionLevel } from './methods/minecraft_serversettings_operator_user_permission_level.ts';
import type { MinecraftServersettingsOperatorUserPermissionLevelSet } from './methods/minecraft_serversettings_operator_user_permission_level_set.ts';
import type { MinecraftServersettingsPauseWhenEmptySeconds } from './methods/minecraft_serversettings_pause_when_empty_seconds.ts';
import type { MinecraftServersettingsPauseWhenEmptySecondsSet } from './methods/minecraft_serversettings_pause_when_empty_seconds_set.ts';
import type { MinecraftServersettingsPlayerIdleTimeout } from './methods/minecraft_serversettings_player_idle_timeout.ts';
import type { MinecraftServersettingsPlayerIdleTimeoutSet } from './methods/minecraft_serversettings_player_idle_timeout_set.ts';
import type { MinecraftServersettingsSimulationDistance } from './methods/minecraft_serversettings_simulation_distance.ts';
import type { MinecraftServersettingsSimulationDistanceSet } from './methods/minecraft_serversettings_simulation_distance_set.ts';
import type { MinecraftServersettingsSpawnProtectionRadius } from './methods/minecraft_serversettings_spawn_protection_radius.ts';
import type { MinecraftServersettingsSpawnProtectionRadiusSet } from './methods/minecraft_serversettings_spawn_protection_radius_set.ts';
import type { MinecraftServersettingsStatusHeartbeatInterval } from './methods/minecraft_serversettings_status_heartbeat_interval.ts';
import type { MinecraftServersettingsStatusHeartbeatIntervalSet } from './methods/minecraft_serversettings_status_heartbeat_interval_set.ts';
import type { MinecraftServersettingsStatusReplies } from './methods/minecraft_serversettings_status_replies.ts';
import type { MinecraftServersettingsStatusRepliesSet } from './methods/minecraft_serversettings_status_replies_set.ts';
import type { MinecraftServersettingsUseAllowlist } from './methods/minecraft_serversettings_use_allowlist.ts';
import type { MinecraftServersettingsUseAllowlistSet } from './methods/minecraft_serversettings_use_allowlist_set.ts';
import type { MinecraftServersettingsViewDistance } from './methods/minecraft_serversettings_view_distance.ts';
import type { MinecraftServersettingsViewDistanceSet } from './methods/minecraft_serversettings_view_distance_set.ts';


export type All =
  | MinecraftAllowlist
  | MinecraftAllowlistAdd
  | MinecraftAllowlistClear
  | MinecraftAllowlistRemove
  | MinecraftAllowlistSet
  | MinecraftBans
  | MinecraftBansAdd
  | MinecraftBansClear
  | MinecraftBansRemove
  | MinecraftBansSet
  | MinecraftGamerules
  | MinecraftGamerulesUpdate
  | MinecraftIpBans
  | MinecraftIpBansAdd
  | MinecraftIpBansClear
  | MinecraftIpBansRemove
  | MinecraftIpBansSet
  | MinecraftOperators
  | MinecraftOperatorsAdd
  | MinecraftOperatorsClear
  | MinecraftOperatorsRemove
  | MinecraftOperatorsSet
  | MinecraftPlayers
  | MinecraftPlayersKick
  | MinecraftServerSave
  | MinecraftServerStatus
  | MinecraftServerStop
  | MinecraftServerSystemMessage
  | MinecraftServersettingsAcceptTransfers
  | MinecraftServersettingsAcceptTransfersSet
  | MinecraftServersettingsAllowFlight
  | MinecraftServersettingsAllowFlightSet
  | MinecraftServersettingsAutosave
  | MinecraftServersettingsAutosaveSet
  | MinecraftServersettingsDifficulty
  | MinecraftServersettingsDifficultySet
  | MinecraftServersettingsEnforceAllowlist
  | MinecraftServersettingsEnforceAllowlistSet
  | MinecraftServersettingsEntityBroadcastRange
  | MinecraftServersettingsEntityBroadcastRangeSet
  | MinecraftServersettingsForceGameMode
  | MinecraftServersettingsForceGameModeSet
  | MinecraftServersettingsGameMode
  | MinecraftServersettingsGameModeSet
  | MinecraftServersettingsHideOnlinePlayers
  | MinecraftServersettingsHideOnlinePlayersSet
  | MinecraftServersettingsMaxPlayers
  | MinecraftServersettingsMaxPlayersSet
  | MinecraftServersettingsMotd
  | MinecraftServersettingsMotdSet
  | MinecraftServersettingsOperatorUserPermissionLevel
  | MinecraftServersettingsOperatorUserPermissionLevelSet
  | MinecraftServersettingsPauseWhenEmptySeconds
  | MinecraftServersettingsPauseWhenEmptySecondsSet
  | MinecraftServersettingsPlayerIdleTimeout
  | MinecraftServersettingsPlayerIdleTimeoutSet
  | MinecraftServersettingsSimulationDistance
  | MinecraftServersettingsSimulationDistanceSet
  | MinecraftServersettingsSpawnProtectionRadius
  | MinecraftServersettingsSpawnProtectionRadiusSet
  | MinecraftServersettingsStatusHeartbeatInterval
  | MinecraftServersettingsStatusHeartbeatIntervalSet
  | MinecraftServersettingsStatusReplies
  | MinecraftServersettingsStatusRepliesSet
  | MinecraftServersettingsUseAllowlist
  | MinecraftServersettingsUseAllowlistSet
  | MinecraftServersettingsViewDistance
  | MinecraftServersettingsViewDistanceSet;

export type { MinecraftAllowlist };
export type { MinecraftAllowlistAdd };
export type { MinecraftAllowlistClear };
export type { MinecraftAllowlistRemove };
export type { MinecraftAllowlistSet };
export type { MinecraftBans };
export type { MinecraftBansAdd };
export type { MinecraftBansClear };
export type { MinecraftBansRemove };
export type { MinecraftBansSet };
export type { MinecraftGamerules };
export type { MinecraftGamerulesUpdate };
export type { MinecraftIpBans };
export type { MinecraftIpBansAdd };
export type { MinecraftIpBansClear };
export type { MinecraftIpBansRemove };
export type { MinecraftIpBansSet };
export type { MinecraftOperators };
export type { MinecraftOperatorsAdd };
export type { MinecraftOperatorsClear };
export type { MinecraftOperatorsRemove };
export type { MinecraftOperatorsSet };
export type { MinecraftPlayers };
export type { MinecraftPlayersKick };
export type { MinecraftServerSave };
export type { MinecraftServerStatus };
export type { MinecraftServerStop };
export type { MinecraftServerSystemMessage };
export type { MinecraftServersettingsAcceptTransfers };
export type { MinecraftServersettingsAcceptTransfersSet };
export type { MinecraftServersettingsAllowFlight };
export type { MinecraftServersettingsAllowFlightSet };
export type { MinecraftServersettingsAutosave };
export type { MinecraftServersettingsAutosaveSet };
export type { MinecraftServersettingsDifficulty };
export type { MinecraftServersettingsDifficultySet };
export type { MinecraftServersettingsEnforceAllowlist };
export type { MinecraftServersettingsEnforceAllowlistSet };
export type { MinecraftServersettingsEntityBroadcastRange };
export type { MinecraftServersettingsEntityBroadcastRangeSet };
export type { MinecraftServersettingsForceGameMode };
export type { MinecraftServersettingsForceGameModeSet };
export type { MinecraftServersettingsGameMode };
export type { MinecraftServersettingsGameModeSet };
export type { MinecraftServersettingsHideOnlinePlayers };
export type { MinecraftServersettingsHideOnlinePlayersSet };
export type { MinecraftServersettingsMaxPlayers };
export type { MinecraftServersettingsMaxPlayersSet };
export type { MinecraftServersettingsMotd };
export type { MinecraftServersettingsMotdSet };
export type { MinecraftServersettingsOperatorUserPermissionLevel };
export type { MinecraftServersettingsOperatorUserPermissionLevelSet };
export type { MinecraftServersettingsPauseWhenEmptySeconds };
export type { MinecraftServersettingsPauseWhenEmptySecondsSet };
export type { MinecraftServersettingsPlayerIdleTimeout };
export type { MinecraftServersettingsPlayerIdleTimeoutSet };
export type { MinecraftServersettingsSimulationDistance };
export type { MinecraftServersettingsSimulationDistanceSet };
export type { MinecraftServersettingsSpawnProtectionRadius };
export type { MinecraftServersettingsSpawnProtectionRadiusSet };
export type { MinecraftServersettingsStatusHeartbeatInterval };
export type { MinecraftServersettingsStatusHeartbeatIntervalSet };
export type { MinecraftServersettingsStatusReplies };
export type { MinecraftServersettingsStatusRepliesSet };
export type { MinecraftServersettingsUseAllowlist };
export type { MinecraftServersettingsUseAllowlistSet };
export type { MinecraftServersettingsViewDistance };
export type { MinecraftServersettingsViewDistanceSet };
