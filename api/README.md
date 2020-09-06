---
id: index
title: scraper
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
