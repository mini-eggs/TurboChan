<template>
  <div>
    <board-search :boards="$store.state.boards.list"/>
  </div>
</template>

<script>
import BoardSearch from "@/components/board-search";

export default {
  components: {
    BoardSearch
  },

  async fetch({ store }) {
    await store.dispatch("boards/request");
  }
};
</script>
