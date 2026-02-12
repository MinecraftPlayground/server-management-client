# Server Management Client

A Minecraft Server JSON-RPC TypeScript Client.

[![Run Linter](https://github.com/MinecraftPlayground/server-management-client/actions/workflows/lint.yml/badge.svg)](https://github.com/MinecraftPlayground/server-management-client/actions/workflows/lint.yml)
[![Run Unit Tests](https://github.com/MinecraftPlayground/server-management-client/actions/workflows/unit_test.yml/badge.svg)](https://github.com/MinecraftPlayground/server-management-client/actions/workflows/unit_test.yml)


## Usage
### Basics
```ts
import { Client } from './client.ts'


const client = new Client('ws://localhost:25576', {
  token: 'my-secret-token'
});

// Call methods
const allowlist = await client.call('minecraft:allowlist');
console.log('Whitelisted players:', allowlist.allowlist);

// Listen for notifications
client.addNotificationListener('minecraft:notification/players/joined', ({ player }) => {
  console.log(`${player.name} joined the server`);
});
```

### Getting and setting values
```ts
import { Client } from './client.ts'


const client = new Client('ws://localhost:25576', {
  token: 'my-secret-token'
});

// Get current difficulty
const { difficulty } = await client.call('minecraft:serversettings/difficulty');
console.log('Current difficulty:', difficulty);

// Set difficulty to hard
await client.call('minecraft:serversettings/difficulty/set', { difficulty: 'hard' });
```

```ts
import { Client } from './client.ts'


const client = new Client('ws://localhost:25576', {
  token: 'my-secret-token'
});

// Get all connected players
const { players } = await client.call('minecraft:players');

// Add player to allowlist
await client.call('minecraft:allowlist/add', {
  add: [{ id: 'uuid-here', name: 'PlayerName' }]
});

// Kick a player
await client.call('minecraft:players/kick', {
  kick: [{
    player: { id: 'uuid', name: 'PlayerName' },
    message: { literal: 'You have been kicked' }
  }]
});
```

## Defining custom methods and notifications
### Methods
```ts
import { Client } from './client.ts'
import type { MethodObjectDefinition } from './schema/index.ts'
import type { minecraft } from './definitions/index.ts'


/**
 * Greet a player on the server
 */
type CustomPlayerGreetMethod = MethodObjectDefinition<
  'custom:player/greet',
  [{
    player : minecraft.schema.PlayerObject,
    message : string
  }],
  { player? : minecraft.schema.PlayerObject }
>

const client = new Client<minecraft.Extend<CustomPlayerGreetMethod>>('ws://localhost:25576', {
  token: 'token-from-server.properties'
});

client.call('custom:player/greet', {
  player: { id: 'uuid', name: 'PlayerName' },
  message: 'Hello Player!'
}).then(({player}) => { console.log(`Greeted player ${player.name}`) })
```

### notifications
```ts
import { Client } from './client.ts'
import type { NotificationObjectDefinition } from './schema/index.ts'
import type { minecraft } from './definitions/index.ts'

/**
 * Greet a player on the server
 */
type CustomPlayerGreetNotification = MethodObjectDefinition<
  'custom:notification/player/greeted',
  [{ player : PlayerObject }]
>

const client = new Client<minecraft.Extend<CustomPlayerGreetNotification>>('ws://localhost:25576', {
  token: 'token-from-server.properties'
});

client.addNotificationListener('custom:notification/player/greeted', ({player}) => {
  console.log(`Greeted player ${player.name}`)
})
```
