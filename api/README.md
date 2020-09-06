---
id: index
title: Discord Scraper API
---

## Overiew

The messages scraper that aggregates data from the Discord API. It uses the
popular [discord.js](https://discord.js.org/#/) library to get the messages
from a specified guild.

## Environment

The following environment variables need to be defined for this to work:

| ENV_VAR           | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| DISCORD_BOT_TOKEN | The bot token of a bot account that has access to channels in your guild |
| DISCORD_GUILD_ID  | The guild ID of the guild you want to run the bot on                     |

## API Response Structure

An example 200 response is shown below:

```
{
    "data": {
        "channels": {
            "general": {
                "stats": {
                    "user1": 10,
                    "user2": 15,
                    "user3": 5,
                    "user4": 3,
                    "user5": 1
                },
                "users": {
                    "user1": "https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp",
                    "user2": "https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp",
                    "user3": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "user4": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "user5": "https://cdn.discordapp.com/embed/avatars/0.png"
                }
            },
            "random": {
                "stats": {
                    "user1": 12,
                    "user2": 11,
                    "user3": 11,
                    "user4": 3,
                    "user5": 1
                },
                "users": {
                    "user1": "https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp",
                    "user2": "https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp",
                    "user3": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "user4": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "user5": "https://cdn.discordapp.com/embed/avatars/0.png"
                }
            },
        },
        "guild": "My sample guild",
        "guildIconURL": "https://cdn.discordapp.com/icons/XXXXXXXXXXXXXX/XXXXXXXXXXX.webp"
    }
}
```

### Example: Working with the API response object

We'll take the object above for example and store it in an object called
`data`.

```javascript
console.log(data);

// {
//   data: {
//     channels: { general: [Object], random: [Object] },
//     guild: 'My sample guild',
//     guildIconURL: 'https://cdn.discordapp.com/icons/XXXXXXXXXXXXXX/XXXXXXXXXXX.webp'
//   }
// }
```

We can see that there's a single top-level key called `data` that contains all
of the data. Accessing `data` gives us 3 more top-level keys:

- `channels` - an object containing all of the stats and users for each channel
- `guild` - the name of the guild (derived from DISCORD_GUILD_ID)
- `guildIconURL` - a link to the guild's icon, so that the client doesn't have
  to fetch it (requires an authenticated request, we want to keep our client
  fairly stupid and let the backend do the heavy lifting)

Let's say we want to get an array of all of the different channel objects:

```javascript
const channels = Object.keys(data.data.channels);

// [ 'general', 'random' ]
```

If we want to print the data for a single channel, we can do this:

```javascript
for (let channel of channels) {
  console.log(channel, data.data.channels[channel]);
}

// general {
//   stats: { user1: 10, user2: 15, user3: 5, user4: 3, user5: 1 },
//   users: {
//     user1: 'https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp',
//     user2: 'https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp',
//     user3: 'https://cdn.discordapp.com/embed/avatars/0.png',
//     user4: 'https://cdn.discordapp.com/embed/avatars/0.png',
//     user5: 'https://cdn.discordapp.com/embed/avatars/0.png'
//   }
// }
// random {
//   stats: { user1: 12, user2: 11, user3: 11, user4: 3, user5: 1 },
//   users: {
//     user1: 'https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp',
//     user2: 'https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp',
//     user3: 'https://cdn.discordapp.com/embed/avatars/0.png',
//     user4: 'https://cdn.discordapp.com/embed/avatars/0.png',
//     user5: 'https://cdn.discordapp.com/embed/avatars/0.png'
//   }
// }
```
