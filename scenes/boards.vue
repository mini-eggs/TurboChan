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
  }
};
</script>
