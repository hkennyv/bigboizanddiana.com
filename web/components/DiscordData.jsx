import React, { useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

import DiscordChannelButtons from "./DiscordChannelButtons";
import DiscordTable from "./DiscordTable";

function DiscordData({ data, isLoading }) {
  // display loader while data is being fetched from the API
  // TODO: need to add a timeout or some kind of retry mechanism..
  if (isLoading || !data) {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }

  const [activeChannel, setActiveChannel] = useState(
    Object.keys(data.channels)[0]
  );
  return (
    <>
      <DiscordChannelButtons
        channels={data.channels}
        activeChannel={activeChannel}
        setActiveChannel={setActiveChannel}
      />
      <DiscordTable
        activeChannel={activeChannel}
        channelData={data.channels[activeChannel]}
        isLoading={isLoading}
      />
    </>
  );
}

export default DiscordData;
