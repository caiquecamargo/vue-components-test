<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <the-header class="bg-primary" :name="name" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { TheHeader } from ".";
import { HeaderObserver } from "./components/shared/header/controllers/HeaderObserver";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    TheHeader,
  },
  setup() {
    const headerObserver = new HeaderObserver();
    headerObserver.provide();
    headerObserver.byPassObserver();

    const name: symbol = headerObserver.name as symbol;

    return {
      name,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
