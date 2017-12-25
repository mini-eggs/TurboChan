<template>
  <search/>
</template>

<script>
import Search from "@/scenes/search";

export default {
  components: {
    Search
  },

  async fetch({ store }) {
    if (store.state.boards.list.length < 1) {
      await store.dispatch("boards/request");
    }
  }
};
</script>
