<template>
  <threads-scene/>
</template>

<script>
import ThreadsScene from "@/scenes/threads";

export default {
  components: {
    ThreadsScene
  },

  async fetch({ store, params }) {
    await store.dispatch("threads/request", params);
  },

  head() {
    return { title: `/${this.$route.params.board}/ - TurboChan` };
  }
};
</script>