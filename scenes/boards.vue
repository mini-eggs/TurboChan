<template>
  <div>
    <tc-loader :show="$store.state.boards.list.length < 1">
      <board-intro :item="item" v-for="item in $store.state.boards.list" :key="item.board"/>
    </tc-loader>
  </div>
</template>

<script>
import TcLoader from "@/components/tc-loader";
import BoardIntro from "@/components/board-intro";
export default { components: { BoardIntro, TcLoader } };
</script>
