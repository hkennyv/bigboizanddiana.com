import React from "react";

function DiscordChannelButtons({ activeChannel, channels, setActiveChannel }) {
  return (
    <div className={"buttonContainer"}>
      {Object.keys(channels).map((key) => (
        // when you click a button, it changes active button in state, telling the discordtable component to render
        // data for that channel
        <button
          key={key}
          onClick={(e) => setActiveChannel(key)}
          className={
            "ui button" + (activeChannel === key ? " activeChannelButton" : "")
          }
        >
          {`#${key}`}{" "}
        </button>
      ))}
    </div>
  );
}

export default DiscordChannelButtons;
