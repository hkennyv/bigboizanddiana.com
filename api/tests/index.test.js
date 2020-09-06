const getChannelStats = require("../index").getChannelStats;
const sampleResponse = require("./response");

it("should run without errors", () => {
  getChannelStats([]);
});
