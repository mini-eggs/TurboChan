<template>
  <div class="container">
    <div class="media" v-if="post.tim">
      <tc-media :item="post" />
    </div>
    <tc-content :item="post" />
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import TcMedia from "./tc-media";
import TcContent from "./tc-content";

export default {
  components: { TcMedia, TcContent },
  props: ["post"]
};
</script>

<style scoped>
.container {
  overflow: hidden;
  padding: 0 5px;
}

.media {
  width: 35%;
  float: left;
  margin: 0 15px 15px 0;
}
</style>