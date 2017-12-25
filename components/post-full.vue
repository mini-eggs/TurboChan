<template>
  <div class="post-full container">
    <div class="title">
      <div><strong>{{ post.name }}</strong></div> <div>{{ post.now }}</div>
    </div>
    <div class="media" v-if="post.ext">
      <tc-media :alwaysLarge="true" :item="post" />
    </div>
    <div class="content">
      <tc-content :item="post"/>
    </div>  
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

export default {
  components: { TcMedia, TcContent },

  props: ["post", "hideActions"],

  computed: {
    href() {
      const board = this.$route.params.board;
      const thread = this.post.no;
      return `/${board}/thread/${thread}`;
    }
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
}

.title {
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 15px;
}

.media {
  margin: 15px 0;
}

.content {
  margin: 15px 0;
}

.actions {
  margin: 15px 0 5px;
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