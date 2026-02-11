import type { MinecraftAllowlist } from './definitions/minecraft_allowlist.ts';
import type { MinecraftAllowlistAdd } from './definitions/minecraft_allowlist_add.ts';
import type { MinecraftAllowlistClear } from './definitions/minecraft_allowlist_clear.ts';
import type { MinecraftAllowlistRemove } from './definitions/minecraft_allowlist_remove.ts';
import type { MinecraftAllowlistSet } from './definitions/minecraft_allowlist_set.ts';
import type { MinecraftBans } from './definitions/minecraft_bans.ts';
import type { MinecraftBansAdd } from './definitions/minecraft_bans_add.ts';
import type { MinecraftBansClear } from './definitions/minecraft_bans_clear.ts';
import type { MinecraftBansRemove } from './definitions/minecraft_bans_remove.ts';
import type { MinecraftBansSet } from './definitions/minecraft_bans_set.ts';
import type { MinecraftGamerules } from './definitions/minecraft_gamerules.ts';
import type { MinecraftGamerulesUpdate } from './definitions/minecraft_gamerules_update.ts';
import type { MinecraftIpBans } from './definitions/minecraft_ip_bans.ts';
import type { MinecraftIpBansAdd } from './definitions/minecraft_ip_bans_add.ts';
import type { MinecraftIpBansClear } from './definitions/minecraft_ip_bans_clear.ts';
import type { MinecraftIpBansRemove } from './definitions/minecraft_ip_bans_remove.ts';
import type { MinecraftIpBansSet } from './definitions/minecraft_ip_bans_set.ts';
import type { MinecraftNotificationAllowlistAdded } from './definitions/minecraft_notification_allowlist_added.ts';
import type { MinecraftNotificationAllowlistRemoved } from './definitions/minecraft_notification_allowlist_removed.ts';
import type { MinecraftNotificationBansAdded } from './definitions/minecraft_notification_bans_added.ts';
import type { MinecraftNotificationBansRemoved } from './definitions/minecraft_notification_bans_removed.ts';
import type { MinecraftNotificationGamerulesUpdated } from './definitions/minecraft_notification_gamerules_updated.ts';
import type { MinecraftNotificationIpBansAdded } from './definitions/minecraft_notification_ip_bans_added.ts';
import type { MinecraftNotificationIpBansRemoved } from './definitions/minecraft_notification_ip_bans_removed.ts';
import type { MinecraftNotificationOperatorsAdded } from './definitions/minecraft_notification_operators_added.ts';
import type { MinecraftNotificationOperatorsRemoved } from './definitions/minecraft_notification_operators_removed.ts';
import type { MinecraftNotificationPlayersJoined } from './definitions/minecraft_notification_players_joined.ts';
import type { MinecraftNotificationPlayersLeft } from './definitions/minecraft_notification_players_left.ts';
import type { MinecraftNotificationServerActivity } from './definitions/minecraft_notification_server_activity.ts';
import type { MinecraftNotificationServerSaved } from './definitions/minecraft_notification_server_saved.ts';
import type { MinecraftNotificationServerSaving } from './definitions/minecraft_notification_server_saving.ts';
import type { MinecraftNotificationServerStarted } from './definitions/minecraft_notification_server_started.ts';
import type { MinecraftNotificationServerStatus } from './definitions/minecraft_notification_server_status.ts';
import type { MinecraftNotificationServerStopping } from './definitions/minecraft_notification_server_stopping.ts';
import type { MinecraftOperators } from './definitions/minecraft_operators.ts';
import type { MinecraftOperatorsAdd } from './definitions/minecraft_operators_add.ts';
import type { MinecraftOperatorsClear } from './definitions/minecraft_operators_clear.ts';
import type { MinecraftOperatorsRemove } from './definitions/minecraft_operators_remove.ts';
import type { MinecraftOperatorsSet } from './definitions/minecraft_operators_set.ts';
import type { MinecraftPlayers } from './definitions/minecraft_players.ts';
import type { MinecraftPlayersKick } from './definitions/minecraft_players_kick.ts';
import type { MinecraftServerSave } from './definitions/minecraft_server_save.ts';
import type { MinecraftServerStatus } from './definitions/minecraft_server_status.ts';
import type { MinecraftServerStop } from './definitions/minecraft_server_stop.ts';
import type { MinecraftServerSystemMessage } from './definitions/minecraft_server_system_message.ts';
import type { MinecraftServersettingsAcceptTransfers } from './definitions/minecraft_serversettings_accept_transfers.ts';
import type { MinecraftServersettingsAcceptTransfersSet } from './definitions/minecraft_serversettings_accept_transfers_set.ts';
import type { MinecraftServersettingsAllowFlight } from './definitions/minecraft_serversettings_allow_flight.ts';
import type { MinecraftServersettingsAllowFlightSet } from './definitions/minecraft_serversettings_allow_flight_set.ts';
import type { MinecraftServersettingsAutosave } from './definitions/minecraft_serversettings_autosave.ts';
import type { MinecraftServersettingsAutosaveSet } from './definitions/minecraft_serversettings_autosave_set.ts';
import type { MinecraftServersettingsDifficulty } from './definitions/minecraft_serversettings_difficulty.ts';
import type { MinecraftServersettingsDifficultySet } from './definitions/minecraft_serversettings_difficulty_set.ts';
import type { MinecraftServersettingsEnforceAllowlist } from './definitions/minecraft_serversettings_enforce_allowlist.ts';
import type { MinecraftServersettingsEnforceAllowlistSet } from './definitions/minecraft_serversettings_enforce_allowlist_set.ts';
import type { MinecraftServersettingsEntityBroadcastRange } from './definitions/minecraft_serversettings_entity_broadcast_range.ts';
import type { MinecraftServersettingsEntityBroadcastRangeSet } from './definitions/minecraft_serversettings_entity_broadcast_range_set.ts';
import type { MinecraftServersettingsForceGameMode } from './definitions/minecraft_serversettings_force_game_mode.ts';
import type { MinecraftServersettingsForceGameModeSet } from './definitions/minecraft_serversettings_force_game_mode_set.ts';
import type { MinecraftServersettingsGameMode } from './definitions/minecraft_serversettings_game_mode.ts';
import type { MinecraftServersettingsGameModeSet } from './definitions/minecraft_serversettings_game_mode_set.ts';
import type { MinecraftServersettingsHideOnlinePlayers } from './definitions/minecraft_serversettings_hide_online_players.ts';
import type { MinecraftServersettingsHideOnlinePlayersSet } from './definitions/minecraft_serversettings_hide_online_players_set.ts';
import type { MinecraftServersettingsMaxPlayers } from './definitions/minecraft_serversettings_max_players.ts';
import type { MinecraftServersettingsMaxPlayersSet } from './definitions/minecraft_serversettings_max_players_set.ts';
import type { MinecraftServersettingsMotd } from './definitions/minecraft_serversettings_motd.ts';
import type { MinecraftServersettingsMotdSet } from './definitions/minecraft_serversettings_motd_set.ts';
import type { MinecraftServersettingsOperatorUserPermissionLevel } from './definitions/minecraft_serversettings_operator_user_permission_level.ts';
import type { MinecraftServersettingsOperatorUserPermissionLevelSet } from './definitions/minecraft_serversettings_operator_user_permission_level_set.ts';
import type { MinecraftServersettingsPauseWhenEmptySeconds } from './definitions/minecraft_serversettings_pause_when_empty_seconds.ts';
import type { MinecraftServersettingsPauseWhenEmptySecondsSet } from './definitions/minecraft_serversettings_pause_when_empty_seconds_set.ts';
import type { MinecraftServersettingsPlayerIdleTimeout } from './definitions/minecraft_serversettings_player_idle_timeout.ts';
import type { MinecraftServersettingsPlayerIdleTimeoutSet } from './definitions/minecraft_serversettings_player_idle_timeout_set.ts';
import type { MinecraftServersettingsSimulationDistance } from './definitions/minecraft_serversettings_simulation_distance.ts';
import type { MinecraftServersettingsSimulationDistanceSet } from './definitions/minecraft_serversettings_simulation_distance_set.ts';
import type { MinecraftServersettingsSpawnProtectionRadius } from './definitions/minecraft_serversettings_spawn_protection_radius.ts';
import type { MinecraftServersettingsSpawnProtectionRadiusSet } from './definitions/minecraft_serversettings_spawn_protection_radius_set.ts';
import type { MinecraftServersettingsStatusHeartbeatInterval } from './definitions/minecraft_serversettings_status_heartbeat_interval.ts';
import type { MinecraftServersettingsStatusHeartbeatIntervalSet } from './definitions/minecraft_serversettings_status_heartbeat_interval_set.ts';
import type { MinecraftServersettingsStatusReplies } from './definitions/minecraft_serversettings_status_replies.ts';
import type { MinecraftServersettingsStatusRepliesSet } from './definitions/minecraft_serversettings_status_replies_set.ts';
import type { MinecraftServersettingsUseAllowlist } from './definitions/minecraft_serversettings_use_allowlist.ts';
import type { MinecraftServersettingsUseAllowlistSet } from './definitions/minecraft_serversettings_use_allowlist_set.ts';
import type { MinecraftServersettingsViewDistance } from './definitions/minecraft_serversettings_view_distance.ts';
import type { MinecraftServersettingsViewDistanceSet } from './definitions/minecraft_serversettings_view_distance_set.ts';


export type Methods =
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
  | MinecraftNotificationAllowlistAdded
  | MinecraftNotificationAllowlistRemoved
  | MinecraftNotificationBansAdded
  | MinecraftNotificationBansRemoved
  | MinecraftNotificationGamerulesUpdated
  | MinecraftNotificationIpBansAdded
  | MinecraftNotificationIpBansRemoved
  | MinecraftNotificationOperatorsAdded
  | MinecraftNotificationOperatorsRemoved
  | MinecraftNotificationPlayersJoined
  | MinecraftNotificationPlayersLeft
  | MinecraftNotificationServerActivity
  | MinecraftNotificationServerSaved
  | MinecraftNotificationServerSaving
  | MinecraftNotificationServerStarted
  | MinecraftNotificationServerStatus
  | MinecraftNotificationServerStopping
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
export type { MinecraftNotificationAllowlistAdded };
export type { MinecraftNotificationAllowlistRemoved };
export type { MinecraftNotificationBansAdded };
export type { MinecraftNotificationBansRemoved };
export type { MinecraftNotificationGamerulesUpdated };
export type { MinecraftNotificationIpBansAdded };
export type { MinecraftNotificationIpBansRemoved };
export type { MinecraftNotificationOperatorsAdded };
export type { MinecraftNotificationOperatorsRemoved };
export type { MinecraftNotificationPlayersJoined };
export type { MinecraftNotificationPlayersLeft };
export type { MinecraftNotificationServerActivity };
export type { MinecraftNotificationServerSaved };
export type { MinecraftNotificationServerSaving };
export type { MinecraftNotificationServerStarted };
export type { MinecraftNotificationServerStatus };
export type { MinecraftNotificationServerStopping };
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
