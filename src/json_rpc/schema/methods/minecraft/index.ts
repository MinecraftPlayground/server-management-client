import type { MinecraftAllowlistClear } from './allowlist_clear.ts';
import type { MinecraftBans } from './bans.ts';
import type { MinecraftBansAdd } from './bans_add.ts';
import type { MinecraftBansClear } from './bans_clear.ts';
import type { MinecraftBansRemove } from './bans_remove.ts';
import type { MinecraftBansSet } from './bans_set.ts';
import type { MinecraftGamerules } from './gamerules.ts';
import type { MinecraftGamerulesUpdate } from './gamerules_update.ts';
import type { MinecraftIpBans } from './ip_bans.ts';
import type { MinecraftIpBansAdd } from './ip_bans_add.ts';
import type { MinecraftIpBansClear } from './ip_bans_clear.ts';
import type { MinecraftIpBansRemove } from './ip_bans_remove.ts';
import type { MinecraftIpBansSet } from './ip_bans_set.ts';
import type { MinecraftNotificationAllowlistAdded } from './notification_allowlist_added.ts';
import type { MinecraftNotificationAllowlistRemoved } from './notification_allowlist_removed.ts';
import type { MinecraftNotificationBansAdded } from './notification_bans_added.ts';
import type { MinecraftNotificationBansRemoved } from './notification_bans_removed.ts';
import type { MinecraftNotificationGamerulesUpdated } from './notification_gamerules_updated.ts';
import type { MinecraftNotificationIpBansAdded } from './notification_ip_bans_added.ts';
import type { MinecraftNotificationIpBansRemoved } from './notification_ip_bans_removed.ts';
import type { MinecraftNotificationOperatorsAdded } from './notification_operators_added.ts';
import type { MinecraftNotificationOperatorsRemoved } from './notification_operators_removed.ts';
import type { MinecraftNotificationPlayersJoined } from './notification_players_joined.ts';
import type { MinecraftNotificationPlayersLeft } from './notification_players_left.ts';
import type { MinecraftNotificationServerActivity } from './notification_server_activity.ts';
import type { MinecraftNotificationServerSaved } from './notification_server_saved.ts';
import type { MinecraftNotificationServerSaving } from './notification_server_saving.ts';
import type { MinecraftNotificationServerStarted } from './notification_server_started.ts';
import type { MinecraftNotificationServerStatus } from './notification_server_status.ts';
import type { MinecraftNotificationServerStopping } from './notification_server_stopping.ts';
import type { MinecraftOperators } from './operators.ts';
import type { MinecraftOperatorsAdd } from './operators_add.ts';
import type { MinecraftOperatorsClear } from './operators_clear.ts';
import type { MinecraftOperatorsRemove } from './operators_remove.ts';
import type { MinecraftOperatorsSet } from './operators_set.ts';
import type { MinecraftPlayers } from './players.ts';
import type { MinecraftPlayersKick } from './players_kick.ts';
import type { MinecraftServerSave } from './server_save.ts';
import type { MinecraftServerStatus } from './server_status.ts';
import type { MinecraftServerStop } from './server_stop.ts';
import type { MinecraftServerSystemMessage } from './server_system_message.ts';
import type { MinecraftServersettingsAcceptTransfers } from './serversettings_accept_transfers.ts';
import type { MinecraftServersettingsAcceptTransfersSet } from './serversettings_accept_transfers_set.ts';
import type { MinecraftServersettingsAllowFlight } from './serversettings_allow_flight.ts';
import type { MinecraftServersettingsAllowFlightSet } from './serversettings_allow_flight_set.ts';
import type { MinecraftServersettingsAutosave } from './serversettings_autosave.ts';
import type { MinecraftServersettingsAutosaveSet } from './serversettings_autosave_set.ts';
import type { MinecraftServersettingsDifficulty } from './serversettings_difficulty.ts';
import type { MinecraftServersettingsDifficultySet } from './serversettings_difficulty_set.ts';
import type { MinecraftServersettingsEnforceAllowlist } from './serversettings_enforce_allowlist.ts';
import type { MinecraftServersettingsEnforceAllowlistSet } from './serversettings_enforce_allowlist_set.ts';
import type { MinecraftServersettingsEntityBroadcastRange } from './serversettings_entity_broadcast_range.ts';
import type { MinecraftServersettingsEntityBroadcastRangeSet } from './serversettings_entity_broadcast_range_set.ts';
import type { MinecraftServersettingsForceGameMode } from './serversettings_force_game_mode.ts';
import type { MinecraftServersettingsForceGameModeSet } from './serversettings_force_game_mode_set.ts';
import type { MinecraftServersettingsGameMode } from './serversettings_game_mode.ts';
import type { MinecraftServersettingsGameModeSet } from './serversettings_game_mode_set.ts';
import type { MinecraftServersettingsHideOnlinePlayers } from './serversettings_hide_online_players.ts';
import type { MinecraftServersettingsHideOnlinePlayersSet } from './serversettings_hide_online_players_set.ts';
import type { MinecraftServersettingsMaxPlayers } from './serversettings_max_players.ts';
import type { MinecraftServersettingsMaxPlayersSet } from './serversettings_max_players_set.ts';
import type { MinecraftServersettingsMotd } from './serversettings_motd.ts';
import type { MinecraftServersettingsMotdSet } from './serversettings_motd_set.ts';
import type { MinecraftServersettingsOperatorUserPermissionLevel } from './serversettings_operator_user_permission_level.ts';
import type { MinecraftServersettingsOperatorUserPermissionLevelSet } from './serversettings_operator_user_permission_level_set.ts';
import type { MinecraftServersettingsPauseWhenEmptySeconds } from './serversettings_pause_when_empty_seconds.ts';
import type { MinecraftServersettingsPauseWhenEmptySecondsSet } from './serversettings_pause_when_empty_seconds_set.ts';
import type { MinecraftServersettingsPlayerIdleTimeout } from './serversettings_player_idle_timeout.ts';
import type { MinecraftServersettingsPlayerIdleTimeoutSet } from './serversettings_player_idle_timeout_set.ts';
import type { MinecraftServersettingsSimulationDistance } from './serversettings_simulation_distance.ts';
import type { MinecraftServersettingsSimulationDistanceSet } from './serversettings_simulation_distance_set.ts';
import type { MinecraftServersettingsSpawnProtectionRadius } from './serversettings_spawn_protection_radius.ts';
import type { MinecraftServersettingsSpawnProtectionRadiusSet } from './serversettings_spawn_protection_radius_set.ts';
import type { MinecraftServersettingsStatusHeartbeatInterval } from './serversettings_status_heartbeat_interval.ts';
import type { MinecraftServersettingsStatusHeartbeatIntervalSet } from './serversettings_status_heartbeat_interval_set.ts';
import type { MinecraftServersettingsStatusReplies } from './serversettings_status_replies.ts';
import type { MinecraftServersettingsStatusRepliesSet } from './serversettings_status_replies_set.ts';
import type { MinecraftServersettingsUseAllowlist } from './serversettings_use_allowlist.ts';
import type { MinecraftServersettingsUseAllowlistSet } from './serversettings_use_allowlist_set.ts';
import type { MinecraftServersettingsViewDistance } from './serversettings_view_distance.ts';
import type { MinecraftServersettingsViewDistanceSet } from './serversettings_view_distance_set.ts';


/**
 * Union type of all method names
 */
export type MethodNames = 
  | MinecraftAllowlistClear['name']
  | MinecraftBans['name']
  | MinecraftBansAdd['name']
  | MinecraftBansClear['name']
  | MinecraftBansRemove['name']
  | MinecraftBansSet['name']
  | MinecraftGamerules['name']
  | MinecraftGamerulesUpdate['name']
  | MinecraftIpBans['name']
  | MinecraftIpBansAdd['name']
  | MinecraftIpBansClear['name']
  | MinecraftIpBansRemove['name']
  | MinecraftIpBansSet['name']
  | MinecraftNotificationAllowlistAdded['name']
  | MinecraftNotificationAllowlistRemoved['name']
  | MinecraftNotificationBansAdded['name']
  | MinecraftNotificationBansRemoved['name']
  | MinecraftNotificationGamerulesUpdated['name']
  | MinecraftNotificationIpBansAdded['name']
  | MinecraftNotificationIpBansRemoved['name']
  | MinecraftNotificationOperatorsAdded['name']
  | MinecraftNotificationOperatorsRemoved['name']
  | MinecraftNotificationPlayersJoined['name']
  | MinecraftNotificationPlayersLeft['name']
  | MinecraftNotificationServerActivity['name']
  | MinecraftNotificationServerSaved['name']
  | MinecraftNotificationServerSaving['name']
  | MinecraftNotificationServerStarted['name']
  | MinecraftNotificationServerStatus['name']
  | MinecraftNotificationServerStopping['name']
  | MinecraftOperators['name']
  | MinecraftOperatorsAdd['name']
  | MinecraftOperatorsClear['name']
  | MinecraftOperatorsRemove['name']
  | MinecraftOperatorsSet['name']
  | MinecraftPlayers['name']
  | MinecraftPlayersKick['name']
  | MinecraftServerSave['name']
  | MinecraftServerStatus['name']
  | MinecraftServerStop['name']
  | MinecraftServerSystemMessage['name']
  | MinecraftServersettingsAcceptTransfers['name']
  | MinecraftServersettingsAcceptTransfersSet['name']
  | MinecraftServersettingsAllowFlight['name']
  | MinecraftServersettingsAllowFlightSet['name']
  | MinecraftServersettingsAutosave['name']
  | MinecraftServersettingsAutosaveSet['name']
  | MinecraftServersettingsDifficulty['name']
  | MinecraftServersettingsDifficultySet['name']
  | MinecraftServersettingsEnforceAllowlist['name']
  | MinecraftServersettingsEnforceAllowlistSet['name']
  | MinecraftServersettingsEntityBroadcastRange['name']
  | MinecraftServersettingsEntityBroadcastRangeSet['name']
  | MinecraftServersettingsForceGameMode['name']
  | MinecraftServersettingsForceGameModeSet['name']
  | MinecraftServersettingsGameMode['name']
  | MinecraftServersettingsGameModeSet['name']
  | MinecraftServersettingsHideOnlinePlayers['name']
  | MinecraftServersettingsHideOnlinePlayersSet['name']
  | MinecraftServersettingsMaxPlayers['name']
  | MinecraftServersettingsMaxPlayersSet['name']
  | MinecraftServersettingsMotd['name']
  | MinecraftServersettingsMotdSet['name']
  | MinecraftServersettingsOperatorUserPermissionLevel['name']
  | MinecraftServersettingsOperatorUserPermissionLevelSet['name']
  | MinecraftServersettingsPauseWhenEmptySeconds['name']
  | MinecraftServersettingsPauseWhenEmptySecondsSet['name']
  | MinecraftServersettingsPlayerIdleTimeout['name']
  | MinecraftServersettingsPlayerIdleTimeoutSet['name']
  | MinecraftServersettingsSimulationDistance['name']
  | MinecraftServersettingsSimulationDistanceSet['name']
  | MinecraftServersettingsSpawnProtectionRadius['name']
  | MinecraftServersettingsSpawnProtectionRadiusSet['name']
  | MinecraftServersettingsStatusHeartbeatInterval['name']
  | MinecraftServersettingsStatusHeartbeatIntervalSet['name']
  | MinecraftServersettingsStatusReplies['name']
  | MinecraftServersettingsStatusRepliesSet['name']
  | MinecraftServersettingsUseAllowlist['name']
  | MinecraftServersettingsUseAllowlistSet['name']
  | MinecraftServersettingsViewDistance['name']
  | MinecraftServersettingsViewDistanceSet['name'];

export type { MinecraftAllowlistClear };
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
