<template>
  <posts-scene/>
</template>

<script>
import PostsScene from "@/scenes/posts";

export default {
  components: {
    PostsScene
  },

  async fetch({ store, params }) {
    await store.dispatch("posts/request", params);
  },

  head() {
    const threadTitle =
      this.$store.state.posts.list[0].sub || this.$route.params.thread;
    return { title: `${threadTitle} - TurboChan` };
  }
};
</script>