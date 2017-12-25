<template>
  <threads-scene/>
</template>

<script>
import ThreadsScene from "@/scenes/threads";

export default {
  components: {
    ThreadsScene
  },

  async mounted() {
    const params = { page: 1, ...this.$route.params };
    await this.$store.dispatch("threads/request", params);
  },

  head() {
    return { title: `/${this.$route.params.board}/ - TurboChan` };
  }
};
</script>