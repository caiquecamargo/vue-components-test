<template>
  <section
    class="
      grid
      items-center
      justify-center
      h-full
      grid-cols-1
      lg:grid-cols-slider
    "
  >
    <span
      v-if="enableControllers"
      class="
        left-0
        hidden
        cursor-pointer
        duration-450
        h-1/2
        top-1/4
        lg:block
        hover:duration-150
        text-true-gray-500
        hover:text-black
      "
    >
      <arrow-icon @click.prevent="turn('right')" />
    </span>
    <div
      ref="container"
      class="
        relative
        flex
        justify-start
        w-4/5
        h-full
        mx-auto
        overflow-hidden
        lg:w-full
      "
      :class="[enableControllers ? '' : 'lg:col-start-2']"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <slot />
    </div>
    <span
      v-if="enableControllers"
      class="
        right-0
        hidden
        transform
        rotate-180
        cursor-pointer
        duration-450
        h-1/2
        top-1/4
        lg:block
        hover:duration-150
        text-true-gray-500
        hover:text-black
      "
    >
      <arrow-icon @click.prevent="turn('left')" />
    </span>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { HorizontalSliderController } from "./controller/HorizontalSliderController";
import ArrowIcon from "../../svg/ArrowIcon.vue";
import { SliderType } from "./controller/HorizontalSlider";
import { getElement } from "../../../helpers/utils";
import { optimizedResizeEvent } from "@/helpers/optimizedResizeEvent";

export default defineComponent({
  components: {
    ArrowIcon,
  },
  props: {
    visibleElements: {
      type: Number,
    },
  },
  setup(props) {
    const container = ref<HTMLElement>();
    let items: HorizontalSliderController[];
    const enableControllers = ref(true);

    const createItems = () => {
      const containerElement = getElement(container.value);
      const visibleElements = props.visibleElements || 3;
      items = Array.from(containerElement.children).map(
        (item, index, array) => {
          const element = HorizontalSliderController.createElementContainer(
            item as HTMLElement
          );
          containerElement.appendChild(element);
          return new HorizontalSliderController(element, index, array.length, {
            visibleElements,
          });
        }
      );

      enableControllers.value = items.length > visibleElements;
    };

    onMounted(() => {
      createItems();
    });

    optimizedResizeEvent.add(createItems);

    let startPositionX = 0;
    let endPositionX = 0;

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      startPositionX = touch.pageX;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      endPositionX = touch.pageX;
      if (enableControllers.value) turnElements();
    };

    const turnElements = () => {
      if (startPositionX - endPositionX > 50)
        items.forEach((item) => item.turn("left"));
      if (startPositionX - endPositionX < -50)
        items.forEach((item) => item.turn("right"));
    };

    const turn = (to: SliderType) => {
      items.forEach((item) => item.turn(to));
    };

    return {
      container,
      turn,
      onTouchStart,
      onTouchEnd,
      enableControllers,
    };
  },
});
</script>

<style lang="scss"></style>
