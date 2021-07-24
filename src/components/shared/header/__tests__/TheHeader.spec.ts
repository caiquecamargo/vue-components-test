import { mount } from "@vue/test-utils";
import router from "../../../../router/__mocks__/router.mock";
import {
  mockWindowIntersectionObserver,
  mockWindowVisualViewport,
} from "../../../../__mocks__/window.mock";
import TheHeader from "../TheHeader.vue";

describe("TheHeader suit test", () => {
  beforeEach(() => {
    mockWindowIntersectionObserver();
    mockWindowVisualViewport();
  });

  it("should render the component with this default state", async () => {
    router.push("/contato");
    await router.isReady();

    const wrapper = mount(TheHeader, {
      global: {
        stubs: {
          TheHeaderNav: true,
          TheHeaderNavMobile: true,
          TheHeaderLogo: true,
        },
        plugins: [router],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("add off-top class if scroll is major then 200 and remove otherwise", async () => {
    router.push("/contato");
    await router.isReady();

    const wrapper = mount(TheHeader, {
      global: {
        stubs: {
          TheHeaderNav: true,
          TheHeaderNavMobile: true,
          TheHeaderLogo: true,
        },
        plugins: [router],
      },
    });

    expect(wrapper.classes()).not.toContain("off-top");

    wrapper.vm.isOffTop(300);
    expect(wrapper.classes()).toContain("off-top");

    wrapper.vm.isOffTop(100);
    expect(wrapper.classes()).not.toContain("off-top");
  });

  it("header has class off-top if prop change when off top is setted to false", async () => {
    router.push("/contato");
    await router.isReady();

    const wrapper = mount(TheHeader, {
      global: {
        stubs: {
          TheHeaderNav: true,
          TheHeaderNavMobile: true,
          TheHeaderLogo: true,
        },
        plugins: [router],
      },
      props: {
        changeWhenOffTop: false,
      },
    });

    expect(wrapper.classes()).toContain("off-top");
  });
});
