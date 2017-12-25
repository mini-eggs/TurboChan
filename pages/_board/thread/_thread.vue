<template>
  <div>
    <div class="post-container" v-for="item in $store.state.posts.list" :key="item.no">
      <post-full :hideActions="true" :post="item"/>
    </div>
  </div>
</template>

<script>
import PostFull from "@/components/post-full";

export default {
  components: {
    PostFull
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

<style scoped>
.post-container {
  margin-top: 15px;
}
</style>