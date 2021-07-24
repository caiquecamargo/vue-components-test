import { config, mount } from "@vue/test-utils";
import { mockWindowIntersectionObserver } from "../../../../__mocks__/window.mock";
import { ISrcset } from "../../image/model/ISrcset";
import TheBanner from "../TheBanner.vue";

describe("TheBanner.vue", () => {
  beforeEach(() => {
    mockWindowIntersectionObserver();
  });

  beforeAll(() => {
    config.renderStubDefaultSlot = true;
  });

  afterAll(() => {
    config.renderStubDefaultSlot = false;
  });

  it("renders the default component with the props passed", () => {
    const srcset: ISrcset = {
      minimal: "minimal",
      medium: "medium",
      large: "large",
      huge: "huge",
      default: "default",
    };
    const wrapper = mount(TheBanner, {
      props: {
        srcset: srcset,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
