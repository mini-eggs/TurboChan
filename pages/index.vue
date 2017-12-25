<template>
  <BoardsScene/>
</template>

<script>
import BoardsScene from "@/scenes/boards";

export default {
  components: {
    BoardsScene
  },

  async fetch({ store }) {
    if (store.state.boards.list.length < 1) {
      await store.dispatch("boards/request");
    }
  }
};
</script>
