// this is a sample api response from the api
const sampleResponse = {
  data: {
    channels: {
      general: {
        stats: {
          user1: 10,
          user2: 15,
          user3: 5,
          user4: 3,
          user5: 1,
        },
        users: {
          user1:
            "https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp",
          user2:
            "https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp",
          user3: "https://cdn.discordapp.com/embed/avatars/0.png",
          user4: "https://cdn.discordapp.com/embed/avatars/0.png",
          user5: "https://cdn.discordapp.com/embed/avatars/0.png",
        },
      },
      random: {
        stats: {
          user1: 12,
          user2: 11,
          user3: 11,
          user4: 3,
          user5: 1,
        },
        users: {
          user1:
            "https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp",
          user2:
            "https://cdn.discordapp.com/avatars/XXXXXXXXXXX/XXXXXXXXXXXXXX.webp",
          user3: "https://cdn.discordapp.com/embed/avatars/0.png",
          user4: "https://cdn.discordapp.com/embed/avatars/0.png",
          user5: "https://cdn.discordapp.com/embed/avatars/0.png",
        },
      },
    },
    guild: "My sample guild",
    guildIconURL:
      "https://cdn.discordapp.com/icons/XXXXXXXXXXXXXX/XXXXXXXXXXX.webp",
  },
};

exports.sampleResponse = sampleResponse;
