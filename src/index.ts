/**
 * Minecraft Server JSON-RPC Client
 * 
 * This module provides a TypeScript client for interacting with Minecraft servers
 * via JSON-RPC 2.0 over WebSocket connections.
 * 
 * @example
 * ```ts
 * import { Client } from '@minecraft-server/management-protocol';
 * 
 * 
 * const client = new Client('ws://localhost:25576', {
 *   token: 'my-secret-token'
 * });
 * 
 * // Call methods
 * const allowlist = await client.call('minecraft:allowlist');
 * console.log('Whitelisted players:', allowlist);
 * 
 * // Listen for notifications
 * client.addNotificationListener('minecraft:notification/players/joined', ({ player }) => {
 *   console.log(`${player.name} joined the server`);
 * });
 * ```
 * @example
 * ```ts
 * import { Client } from '@minecraft-server/management-protocol';
 * 
 * 
 * const client = new Client('ws://localhost:25576', {
 *   token: 'my-secret-token'
 * });
 * 
 * // Get current difficulty
 * const difficulty = await client.call('minecraft:serversettings/difficulty');
 * console.log('Current difficulty:', difficulty);
 * 
 * // Set difficulty to hard
 * await client.call('minecraft:serversettings/difficulty/set', { difficulty: 'hard' });
 * ```
 * @example
 * ```ts
 * import { Client } from '@minecraft-server/management-protocol';
 * 
 * 
 * const client = new Client('ws://localhost:25576', {
 *   token: 'my-secret-token'
 * });
 * 
 * // Get all connected players
 * const players = await client.call('minecraft:players');
 * 
 * // Add player to allowlist
 * await client.call('minecraft:allowlist/add', {
 *   add: [{ id: 'uuid-here', name: 'PlayerName' }]
 * });
 * 
 * // Kick a player
 * await client.call('minecraft:players/kick', {
 *   kick: [{
 *     player: { id: 'uuid', name: 'PlayerName' },
 *     message: { literal: 'You have been kicked' }
 *   }]
 * });
 * ```
 * 
 * @module
 */

export { Client } from './client.ts'
export type { ClientOptions } from './client_options.ts'
export type { ConnectionAddress } from './connection_address.ts'
