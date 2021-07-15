<template>
  <header
    ref="header"
    class="
      fixed
      top-0
      left-0
      z-50
      flex
      justify-between
      w-full
      h-10
      px-3
      py-2
      transition
      lg:h-16
      duration-450
      lg:px-5 lg:py-3
    "
  >
    <slot name="logo" />
    <the-header-nav-mobile v-if="mobile">
      <slot name="navMobile" />
    </the-header-nav-mobile>
    <the-header-nav v-else>
      <slot name="nav" />
    </the-header-nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TheHeaderNav from "./TheHeaderNav.vue";
import TheHeaderNavMobile from "./TheHeaderNavMobile.vue";
import { isMobile } from "@/helpers/utils";
import { HeaderObserverKey } from "./controllers/HeaderObserver";
import { optimizedResizeEvent } from "@/helpers/optimizedResizeEvent";

export default defineComponent({
  props: {
    name: Symbol,
  },
  components: {
    TheHeaderNav,
    TheHeaderNavMobile,
  },
  setup(props) {
    const header = ref(null as unknown as HTMLElement);
    const mobile = ref(true);

    console.log(
      "name: ",
      props.name,
      HeaderObserverKey,
      HeaderObserverKey === props.name
    );

    const isInMobile = () => {
      mobile.value = isMobile();
    };
    isInMobile();

    optimizedResizeEvent.add(isInMobile);

    return {
      mobile,
      header,
      close,
    };
  },
});
</script>

<style lang="postcss">
.off-top {
  @apply duration-450 bg-black bg-opacity-50;
}
</style>
