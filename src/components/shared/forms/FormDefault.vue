<template>
  <form class="grid gap-4" autocomplete="off" data-netlify="true">
    <slot />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormDefault",
});
</script>
