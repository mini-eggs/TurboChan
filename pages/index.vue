<template>
  <BoardsScene/>
</template>

<script>
import BoardsScene from "@/scenes/boards";

export default {
  components: {
    BoardsScene
  },

  async mounted() {
    if (this.$store.state.boards.list.length < 1) {
      await this.$store.dispatch("boards/request");
    }
  }
};
</script>
