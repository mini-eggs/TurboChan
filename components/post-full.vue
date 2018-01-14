<template>
  <div class="post-full container">
    <div class="title">
      <div><strong>{{ post.name }}</strong></div> <div>{{ post.now }}</div>
    </div>
    <div class="header">
      <strong>{{ post.no }} </strong>
      <a @click="handleClick" :href="`#p${reply}`" v-for="reply in post.replies" :key="reply">>>{{ reply }} </a>
    </div>
    <div>
      <div class="media" v-if="post.ext">
        <tc-media :alwaysLarge="true" :item="post" />
      </div>
      <tc-content :item="post">
        <div style="height: 15px;"></div>
      </tc-content>
    </div>
    <div style="clear: both;"></div>
    <div class="actions" v-if="!hideActions">
      <div>
        <nuxt-link :to="href">
          <img src="../assets/ic_comment_white_24px.svg" />
          <span>{{ post.replies }}</span>
        </nuxt-link>
        <nuxt-link :to="href">
          <img src="../assets/ic_insert_photo_white_24px.svg" />
          <span>{{ post.images }}</span>
        </nuxt-link>
      </div>
      <nuxt-link :to="href" class="reply">
        REPLY
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import TcMedia from "./tc-media";
import TcContent from "./tc-content";
import QuoteMixin from "@/mixins/quote";

export default {
  components: { TcMedia, TcContent },

  mixins: [QuoteMixin],

  props: ["post", "hideActions"],

  computed: {
    href() {
      const board = this.$route.params.board;
      const thread = this.post.no;
      return `/${board}/thread/${thread}`;
    }
  },

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

<style>
.post-full.container .content p {
  overflow: hidden;
}
</style>

<style scoped>
.container {
  background-color: rgba(0, 0, 0, 0.25);
  padding: 5px 15px;
  border-radius: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title {
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 15px;
}

.header {
  margin-bottom: 15px;
}

.media {
  /* margin: 15px 0; */
  width: 35%;
  float: left;
  margin: 0 15px 15px 0;
}

.content {
  margin: 15px 0;
}

.actions {
  /* margin: 15px 0 5px; */
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.actions > div {
  display: flex;
}

.actions a {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-right: 15px;
  font-weight: bold;
  font-size: 14px;
}

.actions a span {
  margin-left: 5px;
}

.actions a.reply {
  margin: 0;
}
</style>