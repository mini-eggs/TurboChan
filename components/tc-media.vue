<template>
  <div class="media-container">
    <div @click="makeLarge" v-if="mode === 'small'" :class="{ 'play': !isImage }">
      <simple-image :src="small" />
    </div>
    <div @click="makeSmall" v-else>
      <simple-image v-if="isImage" :src="large" />
      <video v-else autoplay loop :src="large"/>
    </div>
  </div>
</template>

<script>
import { API_BASE } from "@/constants/";
import SimpleImage from "vue-simple-image";

export default {
  props: ["item", "alwaysLarge"],

  components: { SimpleImage },

  data() {
    const board = this.$route.params.board;
    const { w, h, tn_w, tn_h, tim, ext } = this.item;
    const large = `${API_BASE}/api/media/${board}/${tim}${ext}`;
    const small = `${API_BASE}/api/media/${board}/${tim}s.jpg`;
    const isImage = [".gif", ".jpg", ".jpeg", ".png"].includes(ext);

    return {
      large,
      small,
      mode: this.alwaysLarge && isImage ? "large" : "small",
      isImage,
      size: {}
    };
  },

  methods: {
    makeLarge() {
      if (!(this.alwaysLarge && this.isImage)) {
        const container = this.$el.parentElement.parentElement.offsetWidth - 10;
        this.$el.parentElement.style.width = "100%";
        this.mode = "large";
      }
    },

    makeSmall() {
      if (!(this.alwaysLarge && this.isImage)) {
        this.$el.parentElement.style.width = "";
        this.mode = "small";
      }
    }
  }
};
</script>

<style scoped>
.media-container {
  cursor: pointer;
}

.background {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 4px;
  overflow: hidden;
}

img {
  width: 100%;
  border-radius: 4px;
  vertical-align: middle;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.25);
}

video {
  width: 100%;
  vertical-align: middle;
}

.play {
  overflow: hidden;
  object-fit: contain;
  position: relative;
}

.play:after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 50%;
  background-image: url("../assets/ic_play_arrow_white_24px.svg");
  width: 50px;
  height: 50px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>