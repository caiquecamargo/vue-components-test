<template>
  <section class="flex flex-col h-full gap-3">
    <div class="flex-grow">
      <the-image-content
        class="h-120"
        :src="image"
        :description="description"
      />
    </div>
    <div class="h-20">
      <base-horizontal-slider :visibleElements="3">
        <the-image-content
          v-for="(img, index) in imageGallery"
          :key="index"
          :src="img"
          :description="description"
          @click="changeImage(Number(index))"
          class="cursor-pointer"
        />
      </base-horizontal-slider>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TheImageContent from "@/components/shared/image/TheImageContent.vue";
import BaseHorizontalSlider from "@/components/shared/slider/BaseHorizontalSlider.vue";

export default defineComponent({
  components: { TheImageContent, BaseHorizontalSlider },
  emits: ["change-image"],
  props: {
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    imageGallery: {
      type: Array as PropType<string[]>,
    },
  },
  setup(_, { emit }) {
    const changeImage = (index: number) => emit("change-image", index);
    return {
      changeImage,
    };
  },
});
</script>

<style lang="scss"></style>
