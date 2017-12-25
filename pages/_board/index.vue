<template>
  <div>
    <thread-preview v-for="item in $store.state.threads.list" :key="item.posts[0].no" :thread="item"/>
  </div>
</template>

<script>
import ThreadPreview from "@/components/thread-preview";

export default {
  components: {
    ThreadPreview
  },

  async fetch({ store, params }) {
    await store.dispatch("threads/request", { page: 1, ...params });
  },

  head() {
    return { title: `/${this.$route.params.board}/ - TurboChan` };
  }
};
</script>