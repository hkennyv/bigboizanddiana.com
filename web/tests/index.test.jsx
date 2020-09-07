import React from "react";
import { mount } from "enzyme";
import Home from "../pages/index";

describe("Home", () => {
  it("should mount without errors", () => {
    mount(<Home />);
  });
});
