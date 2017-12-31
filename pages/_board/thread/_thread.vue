<template>
  <posts-scene/>
</template>

<script>
import PostsScene from "@/scenes/posts";

export default {
  components: {
    PostsScene
  },

  async mounted() {
    await this.$store.dispatch("posts/request", this.$route.params);
  },

  destroyed() {
    this.$store.dispatch("posts/clear");
  },

  head() {
    const { board, thread } = this.$route.params;
    return { title: `/${board}/ - ${thread} - TurboChan` };
  }
};
</script>