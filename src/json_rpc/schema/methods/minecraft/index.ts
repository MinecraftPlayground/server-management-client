import type { AllowlistClear } from './allowlist_clear.ts';
import type { Bans } from './bans.ts';
import type { BansAdd } from './bans_add.ts';
import type { BansClear } from './bans_clear.ts';
import type { BansRemove } from './bans_remove.ts';
import type { BansSet } from './bans_set.ts';
import type { Gamerules } from './gamerules.ts';
import type { GamerulesUpdate } from './gamerules_update.ts';
import type { IpBans } from './ip_bans.ts';
import type { IpBansAdd } from './ip_bans_add.ts';
import type { IpBansClear } from './ip_bans_clear.ts';
import type { IpBansRemove } from './ip_bans_remove.ts';
import type { IpBansSet } from './ip_bans_set.ts';
import type { NotificationAllowlistAdded } from './notification_allowlist_added.ts';
import type { NotificationAllowlistRemoved } from './notification_allowlist_removed.ts';
import type { NotificationBansAdded } from './notification_bans_added.ts';
import type { NotificationBansRemoved } from './notification_bans_removed.ts';
import type { NotificationGamerulesUpdated } from './notification_gamerules_updated.ts';
import type { NotificationIpBansAdded } from './notification_ip_bans_added.ts';
import type { NotificationIpBansRemoved } from './notification_ip_bans_removed.ts';
import type { NotificationOperatorsAdded } from './notification_operators_added.ts';
import type { NotificationOperatorsRemoved } from './notification_operators_removed.ts';
import type { NotificationPlayersJoined } from './notification_players_joined.ts';
import type { NotificationPlayersLeft } from './notification_players_left.ts';
import type { NotificationServerActivity } from './notification_server_activity.ts';
import type { NotificationServerSaved } from './notification_server_saved.ts';
import type { NotificationServerSaving } from './notification_server_saving.ts';
import type { NotificationServerStarted } from './notification_server_started.ts';
import type { NotificationServerStatus } from './notification_server_status.ts';
import type { NotificationServerStopping } from './notification_server_stopping.ts';
import type { Operators } from './operators.ts';
import type { OperatorsAdd } from './operators_add.ts';
import type { OperatorsClear } from './operators_clear.ts';
import type { OperatorsRemove } from './operators_remove.ts';
import type { OperatorsSet } from './operators_set.ts';
import type { Players } from './players.ts';
import type { PlayersKick } from './players_kick.ts';
import type { ServerSave } from './server_save.ts';
import type { ServerStatus } from './server_status.ts';
import type { ServerStop } from './server_stop.ts';
import type { ServerSystemMessage } from './server_system_message.ts';
import type { ServersettingsAcceptTransfers } from './serversettings_accept_transfers.ts';
import type { ServersettingsAcceptTransfersSet } from './serversettings_accept_transfers_set.ts';
import type { ServersettingsAllowFlight } from './serversettings_allow_flight.ts';
import type { ServersettingsAllowFlightSet } from './serversettings_allow_flight_set.ts';
import type { ServersettingsAutosave } from './serversettings_autosave.ts';
import type { ServersettingsAutosaveSet } from './serversettings_autosave_set.ts';
import type { ServersettingsDifficulty } from './serversettings_difficulty.ts';
import type { ServersettingsDifficultySet } from './serversettings_difficulty_set.ts';
import type { ServersettingsEnforceAllowlist } from './serversettings_enforce_allowlist.ts';
import type { ServersettingsEnforceAllowlistSet } from './serversettings_enforce_allowlist_set.ts';
import type { ServersettingsEntityBroadcastRange } from './serversettings_entity_broadcast_range.ts';
import type { ServersettingsEntityBroadcastRangeSet } from './serversettings_entity_broadcast_range_set.ts';
import type { ServersettingsForceGameMode } from './serversettings_force_game_mode.ts';
import type { ServersettingsForceGameModeSet } from './serversettings_force_game_mode_set.ts';
import type { ServersettingsGameMode } from './serversettings_game_mode.ts';
import type { ServersettingsGameModeSet } from './serversettings_game_mode_set.ts';
import type { ServersettingsHideOnlinePlayers } from './serversettings_hide_online_players.ts';
import type { ServersettingsHideOnlinePlayersSet } from './serversettings_hide_online_players_set.ts';
import type { ServersettingsMaxPlayers } from './serversettings_max_players.ts';
import type { ServersettingsMaxPlayersSet } from './serversettings_max_players_set.ts';
import type { ServersettingsMotd } from './serversettings_motd.ts';
import type { ServersettingsMotdSet } from './serversettings_motd_set.ts';
import type { ServersettingsOperatorUserPermissionLevel } from './serversettings_operator_user_permission_level.ts';
import type { ServersettingsOperatorUserPermissionLevelSet } from './serversettings_operator_user_permission_level_set.ts';
import type { ServersettingsPauseWhenEmptySeconds } from './serversettings_pause_when_empty_seconds.ts';
import type { ServersettingsPauseWhenEmptySecondsSet } from './serversettings_pause_when_empty_seconds_set.ts';
import type { ServersettingsPlayerIdleTimeout } from './serversettings_player_idle_timeout.ts';
import type { ServersettingsPlayerIdleTimeoutSet } from './serversettings_player_idle_timeout_set.ts';
import type { ServersettingsSimulationDistance } from './serversettings_simulation_distance.ts';
import type { ServersettingsSimulationDistanceSet } from './serversettings_simulation_distance_set.ts';
import type { ServersettingsSpawnProtectionRadius } from './serversettings_spawn_protection_radius.ts';
import type { ServersettingsSpawnProtectionRadiusSet } from './serversettings_spawn_protection_radius_set.ts';
import type { ServersettingsStatusHeartbeatInterval } from './serversettings_status_heartbeat_interval.ts';
import type { ServersettingsStatusHeartbeatIntervalSet } from './serversettings_status_heartbeat_interval_set.ts';
import type { ServersettingsStatusReplies } from './serversettings_status_replies.ts';
import type { ServersettingsStatusRepliesSet } from './serversettings_status_replies_set.ts';
import type { ServersettingsUseAllowlist } from './serversettings_use_allowlist.ts';
import type { ServersettingsUseAllowlistSet } from './serversettings_use_allowlist_set.ts';
import type { ServersettingsViewDistance } from './serversettings_view_distance.ts';
import type { ServersettingsViewDistanceSet } from './serversettings_view_distance_set.ts';


/**
 * Union type of all method names
 */
export type MethodNames = 
  | AllowlistClear['name']
  | Bans['name']
  | BansAdd['name']
  | BansClear['name']
  | BansRemove['name']
  | BansSet['name']
  | Gamerules['name']
  | GamerulesUpdate['name']
  | IpBans['name']
  | IpBansAdd['name']
  | IpBansClear['name']
  | IpBansRemove['name']
  | IpBansSet['name']
  | NotificationAllowlistAdded['name']
  | NotificationAllowlistRemoved['name']
  | NotificationBansAdded['name']
  | NotificationBansRemoved['name']
  | NotificationGamerulesUpdated['name']
  | NotificationIpBansAdded['name']
  | NotificationIpBansRemoved['name']
  | NotificationOperatorsAdded['name']
  | NotificationOperatorsRemoved['name']
  | NotificationPlayersJoined['name']
  | NotificationPlayersLeft['name']
  | NotificationServerActivity['name']
  | NotificationServerSaved['name']
  | NotificationServerSaving['name']
  | NotificationServerStarted['name']
  | NotificationServerStatus['name']
  | NotificationServerStopping['name']
  | Operators['name']
  | OperatorsAdd['name']
  | OperatorsClear['name']
  | OperatorsRemove['name']
  | OperatorsSet['name']
  | Players['name']
  | PlayersKick['name']
  | ServerSave['name']
  | ServerStatus['name']
  | ServerStop['name']
  | ServerSystemMessage['name']
  | ServersettingsAcceptTransfers['name']
  | ServersettingsAcceptTransfersSet['name']
  | ServersettingsAllowFlight['name']
  | ServersettingsAllowFlightSet['name']
  | ServersettingsAutosave['name']
  | ServersettingsAutosaveSet['name']
  | ServersettingsDifficulty['name']
  | ServersettingsDifficultySet['name']
  | ServersettingsEnforceAllowlist['name']
  | ServersettingsEnforceAllowlistSet['name']
  | ServersettingsEntityBroadcastRange['name']
  | ServersettingsEntityBroadcastRangeSet['name']
  | ServersettingsForceGameMode['name']
  | ServersettingsForceGameModeSet['name']
  | ServersettingsGameMode['name']
  | ServersettingsGameModeSet['name']
  | ServersettingsHideOnlinePlayers['name']
  | ServersettingsHideOnlinePlayersSet['name']
  | ServersettingsMaxPlayers['name']
  | ServersettingsMaxPlayersSet['name']
  | ServersettingsMotd['name']
  | ServersettingsMotdSet['name']
  | ServersettingsOperatorUserPermissionLevel['name']
  | ServersettingsOperatorUserPermissionLevelSet['name']
  | ServersettingsPauseWhenEmptySeconds['name']
  | ServersettingsPauseWhenEmptySecondsSet['name']
  | ServersettingsPlayerIdleTimeout['name']
  | ServersettingsPlayerIdleTimeoutSet['name']
  | ServersettingsSimulationDistance['name']
  | ServersettingsSimulationDistanceSet['name']
  | ServersettingsSpawnProtectionRadius['name']
  | ServersettingsSpawnProtectionRadiusSet['name']
  | ServersettingsStatusHeartbeatInterval['name']
  | ServersettingsStatusHeartbeatIntervalSet['name']
  | ServersettingsStatusReplies['name']
  | ServersettingsStatusRepliesSet['name']
  | ServersettingsUseAllowlist['name']
  | ServersettingsUseAllowlistSet['name']
  | ServersettingsViewDistance['name']
  | ServersettingsViewDistanceSet['name'];

export type { AllowlistClear };
export type { Bans };
export type { BansAdd };
export type { BansClear };
export type { BansRemove };
export type { BansSet };
export type { Gamerules };
export type { GamerulesUpdate };
export type { IpBans };
export type { IpBansAdd };
export type { IpBansClear };
export type { IpBansRemove };
export type { IpBansSet };
export type { NotificationAllowlistAdded };
export type { NotificationAllowlistRemoved };
export type { NotificationBansAdded };
export type { NotificationBansRemoved };
export type { NotificationGamerulesUpdated };
export type { NotificationIpBansAdded };
export type { NotificationIpBansRemoved };
export type { NotificationOperatorsAdded };
export type { NotificationOperatorsRemoved };
export type { NotificationPlayersJoined };
export type { NotificationPlayersLeft };
export type { NotificationServerActivity };
export type { NotificationServerSaved };
export type { NotificationServerSaving };
export type { NotificationServerStarted };
export type { NotificationServerStatus };
export type { NotificationServerStopping };
export type { Operators };
export type { OperatorsAdd };
export type { OperatorsClear };
export type { OperatorsRemove };
export type { OperatorsSet };
export type { Players };
export type { PlayersKick };
export type { ServerSave };
export type { ServerStatus };
export type { ServerStop };
export type { ServerSystemMessage };
export type { ServersettingsAcceptTransfers };
export type { ServersettingsAcceptTransfersSet };
export type { ServersettingsAllowFlight };
export type { ServersettingsAllowFlightSet };
export type { ServersettingsAutosave };
export type { ServersettingsAutosaveSet };
export type { ServersettingsDifficulty };
export type { ServersettingsDifficultySet };
export type { ServersettingsEnforceAllowlist };
export type { ServersettingsEnforceAllowlistSet };
export type { ServersettingsEntityBroadcastRange };
export type { ServersettingsEntityBroadcastRangeSet };
export type { ServersettingsForceGameMode };
export type { ServersettingsForceGameModeSet };
export type { ServersettingsGameMode };
export type { ServersettingsGameModeSet };
export type { ServersettingsHideOnlinePlayers };
export type { ServersettingsHideOnlinePlayersSet };
export type { ServersettingsMaxPlayers };
export type { ServersettingsMaxPlayersSet };
export type { ServersettingsMotd };
export type { ServersettingsMotdSet };
export type { ServersettingsOperatorUserPermissionLevel };
export type { ServersettingsOperatorUserPermissionLevelSet };
export type { ServersettingsPauseWhenEmptySeconds };
export type { ServersettingsPauseWhenEmptySecondsSet };
export type { ServersettingsPlayerIdleTimeout };
export type { ServersettingsPlayerIdleTimeoutSet };
export type { ServersettingsSimulationDistance };
export type { ServersettingsSimulationDistanceSet };
export type { ServersettingsSpawnProtectionRadius };
export type { ServersettingsSpawnProtectionRadiusSet };
export type { ServersettingsStatusHeartbeatInterval };
export type { ServersettingsStatusHeartbeatIntervalSet };
export type { ServersettingsStatusReplies };
export type { ServersettingsStatusRepliesSet };
export type { ServersettingsUseAllowlist };
export type { ServersettingsUseAllowlistSet };
export type { ServersettingsViewDistance };
export type { ServersettingsViewDistanceSet };
