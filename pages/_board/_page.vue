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
    await this.$store.dispatch("threads/request", this.$route.params);
  },

  destroyed() {
    this.$store.dispatch("threads/clear");
  },

  head() {
    return { title: `/${this.$route.params.board}/ - TurboChan` };
  }
};
</script>