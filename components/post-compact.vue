<template>
  <div class="container">
    <div class="header">
      <strong>{{ post.no }} </strong>
      <a @click="handleClick" :href="`#p${reply}`" v-for="reply in post.replies" :key="reply">>>{{ reply }} </a>
    </div>
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
import QuoteMixin from "@/mixins/quote";

export default {
  components: { TcMedia, TcContent },

  mixins: [QuoteMixin],

  props: ["post"],

  watch: {
    post(value) {
      this.item = value;
    }
  },

  data() {
    return { item: this.post };
  }
};
</script>

<style scoped>
.container {
  overflow: hidden;
  padding: 0 15px;
}

.header {
  margin-bottom: 15px;
}

.media {
  width: 35%;
  float: left;
  margin: 0 15px 15px 0;
}
</style>