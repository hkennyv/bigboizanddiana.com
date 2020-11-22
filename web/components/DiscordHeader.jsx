import React from "react";

function DiscordHeader({ guild }) {
  return (
    <>
      <div>
        <h1>{guild}</h1>
      </div>
      <p className={"titleSubHeading"}>
        Join us in the <a>discord!</a>
      </p>
    </>
  );
}

export default DiscordHeader;
