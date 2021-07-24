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
import { defineComponent, onMounted, ref } from "vue";
import TheHeaderNav from "./TheHeaderNav.vue";
import TheHeaderNavMobile from "./TheHeaderNavMobile.vue";
import { isMobile } from "@/helpers/utils";
import { optimizedResizeEvent } from "@/helpers/optimizedResizeEvent";
import { optimizedScrollEvent } from "@/helpers/optimizedScrollEvent";

export default defineComponent({
  components: {
    TheHeaderNav,
    TheHeaderNavMobile,
  },
  props: {
    changeWhenOffTop: {
      type: Boolean,
      default: true,
    },
    offTopSize: {
      type: Number,
      default: 200,
    },
    offTopClass: {
      type: String,
      default: "off-top",
    },
  },
  setup(props) {
    const header = ref(null as unknown as HTMLElement);
    const mobile = ref(true);

    const isInMobile = () => {
      mobile.value = isMobile();
    };
    isInMobile();

    const isOffTop = (scroll: number) => {
      if (scroll >= props.offTopSize)
        header.value.classList.add(props.offTopClass);
      else header.value.classList.remove(props.offTopClass);
    };

    onMounted(() => {
      if (props.changeWhenOffTop) optimizedScrollEvent.add(isOffTop);
      else header.value.classList.add(props.offTopClass);
    });

    optimizedResizeEvent.add(isInMobile);

    return {
      mobile,
      header,
      close,
      isOffTop,
    };
  },
});
</script>

<style lang="postcss">
.off-top {
  @apply duration-450 bg-black bg-opacity-50;
}
</style>
