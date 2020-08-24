require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

const { DISCORD_GUILD_ID, DISCORD_BOT_TOKEN } = process.env;

// TODO: modify this to take in a date range and return messages within that
// date range
async function getMessages(channels) {
  // outputs the messages in the following format:
  // data = {
  //   channelName1: Collection<Messages>,
  //   channelName2: Collection<Messages>,
  //   ...
  // }
  const data = {};
  await Promise.all(
    channels.map(async (channel) => {
      try {
        // there is a undocumented limit of 100. past that, it throws a
        // DiscordAPIError
        const messages = await channel.messages.fetch({ limit: 100 });
        data[channel.name] = { messages };
      } catch (err) {
        console.log(`Bot doesn't have access to: #${channel.name}`);
      }
    })
  );

  return data;
}

function getChannelStats(channelMessages) {
  const channelStats = {};

  channelMessages.forEach((msg) => {
    const { username } = msg.author;
    if (username in channelStats) channelStats[username] += 1;
    else channelStats[username] = 1;
  });

  return channelStats;
}

function getData() {
  return new Promise((resolve, reject) => {
    client.once("ready", async () => {
      const guildId = DISCORD_GUILD_ID;
      const guild = await client.guilds.fetch(guildId);
      const channels = guild.channels.cache
        .filter((channel) => channel.type === "text")
        .array();

      // Get messages
      // NOTE: this could be an issue if there are large amounts of messages in the
      // time range
      const messages = await getMessages(channels);
      const channelStats = Object.entries(messages)
        .map((entry) => ({
          stats: getChannelStats(entry[1].messages),
          channel: entry[0],
        }))
        .reduce((obj, item) => {
          obj[item.channel] = item.stats;
          return obj;
        }, {});

      // finish and gracefully exit
      client.destroy();

      // debug channelStats
      console.log(channelStats);

      // return channelStats;
      resolve({ data: channelStats });
    });

    client.login(DISCORD_BOT_TOKEN);
  });
}

// TODO: modify this to take in a date-range query params and pass that to
// `getData`
exports.handler = async (req, res) => {
  const data = await getData();
  res.status(200).send(data);
};
