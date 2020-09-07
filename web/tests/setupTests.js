import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import sampleResponse from "./response";

// set test environment
process.env.NODE_ENV = "TEST";

// configure adapter
Enzyme.configure({ adapter: new Adapter() });

// mock fetch
global.fetch = jest.fn((url, options) =>
  Promise.resolve({ json: () => Promise.resolve(sampleResponse) })
);
