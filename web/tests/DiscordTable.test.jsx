import { mount } from "enzyme";
import DiscordTable from "../components/DiscordTable";

import sampleResponse from "./response";

describe("<DiscordTable />", () => {
  it("should mount without errors", () => {
    mount(
      <DiscordTable
        activeTable={"test table"}
        isLoading={false}
        channelData={sampleResponse.data.channels.random}
      />
    );
  });
});
