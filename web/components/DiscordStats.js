import { useEffect, useRef } from "react";

import { Dimmer, Loader, Segment } from "semantic-ui-react";

import * as d3 from "d3";
import { svg } from "d3";

export default function DiscordStats({ data }) {
  const ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(ref.current);
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
  }, [data]);

  return (
    <>
      <Dimmer active={!data}>
        <Loader content="Loading" />
      </Dimmer>
      <svg width={800} height={600} ref={ref} />
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
