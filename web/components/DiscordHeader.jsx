import React from "react";

function DiscordHeader({ guild, headerImage }) {
  return (
    <>
      <div className="titleHeading">
        {headerImage ? <img className="titleImage" src={headerImage} /> : null}
        <h1 className="titleText">{guild}</h1>
      </div>
      <p className={"titleSubHeading"}>
        Join us in the <a>discord!</a>
      </p>
    </>
  );
}

export default DiscordHeader;
