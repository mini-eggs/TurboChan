<template>
  <search-scene/>
</template>

<script>
import SearchScene from "@/scenes/search";

export default {
  components: {
    SearchScene
  },

  async mounted() {
    if (this.$store.state.boards.list.length < 1) {
      await this.$store.dispatch("boards/request");
    }
  }
};
</script>
