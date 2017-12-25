<template>
  <div>
    <board-intro :item="item" v-for="item in $store.state.boards.list" :key="item.board"/>
  </div>
</template>

<script>
import BoardIntro from "@/components/board-intro";

export default {
  components: {
    BoardIntro
  },

  async fetch({ store }) {
    if (store.state.boards.list.length < 1) {
      await store.dispatch("boards/request");
    }
  }
};
</script>
