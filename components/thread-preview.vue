<template>
  <div class="container">
    <post-full :post="first"/>
    <div v-for="(item, index) in rest" :key="item.no">
      <hr v-if="index !== 0"/>
      <post-compact :post="item"/>
    </div>
  </div>
</template>

<script>
import PostFull from "./post-full";
import PostCompact from "./post-compact";

export default {
  components: {
    PostFull,
    PostCompact
  },

  props: ["thread"],

  computed: {
    first() {
      return [...this.thread.posts].shift();
    },
    rest() {
      return [...this.thread.posts].slice(1);
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 15px;
}

hr {
  border: none;
  width: calc(100% - 10px);
  margin: 15px auto;
  background-color: rgba(0, 0, 0, 0.125);
  height: 2px;
  border-radius: 4px;
}
</style>