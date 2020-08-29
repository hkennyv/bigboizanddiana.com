require("dotenv").config();
const Discord = require("discord.js");

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
  const stats = {};

  channelMessages.forEach((msg) => {
    const { username } = msg.author;
    if (username in stats) stats[username] += 1;
    else stats[username] = 1;
  });

  const users = getUserData(channelMessages);

  return { stats, users };
}

function getUserData(messages) {
  const uniqueUsers = [...new Set(messages.map((msg) => msg.author))];
  const userData = uniqueUsers.reduce(
    (obj, current) => ({
      ...obj,
      [current.username]: current.displayAvatarURL(),
    }),
    {}
  );

  return userData;
}

 function getData() {
  // create new discord client
  const client = new Discord.Client();

  return new Promise((resolve, reject) => {
    client.on("ready", async () => {
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

      // resolve stats
      resolve({
        data: {
          channels: channelStats,
          guild: guild.name,
          guildIconURL: guild.iconURL(),
        },
      });

      // finish and gracefully exit
      client.destroy();
    });

    client.login(DISCORD_BOT_TOKEN);
  });
}

// TODO: modify this to take in a date-range query params and pass that to
// `getData`
exports.handler = async (req, res) => {
  const data = await getData();
  res.set("Access-Control-Allow-Methods", "GET");
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send(data);
};
