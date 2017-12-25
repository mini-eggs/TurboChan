<template>
  <div class="media-container">
    <div @click="makeLarge" v-if="mode === 'small'" :class="{ 'play': !isImage }">
      <img :src="small"/>
    </div>
    <div @click="makeSmall" v-else>
      <div v-if="isImage" class="background" :style="{ backgroundImage: `url(${small})` }">
        <img :src="large"/>
      </div>
      <video v-else autoplay loop :src="large"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "alwaysLarge"],

  data() {
    const board = this.$route.params.board;
    const { w, h, tn_w, tn_h, tim, ext } = this.item;
    const large = `/api/media/${board}/${tim}${ext}`;
    const small = `/api/media/${board}/${tim}s.jpg`;
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
      if (this.alwaysLarge && this.isImage) return;
      const container = this.$el.parentElement.parentElement.offsetWidth - 10;
      const original = this.item.w;
      const ratio = original / container;
      this.$el.parentElement.style.width = "100%";
      this.$el.parentElement.style.height = `${this.item.h / ratio}px`;
      this.mode = "large";
    },
    makeSmall() {
      if (this.alwaysLarge && this.isImage) return;
      this.$el.parentElement.style.width = "";
      this.$el.parentElement.style.height = "";
      this.mode = "small";
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