<template>
  <search/>
</template>

<script>
import Search from "@/scenes/search";

export default {
  components: {
    Search
  },

  async mounted() {
    if (this.$store.state.boards.list.length < 1) {
      await this.$store.dispatch("boards/request");
    }
  }
};
</script>
