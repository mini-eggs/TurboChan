<template>
  <div class="media-container" :style="{ height }" :class="{ 'play': !isImage }">
    <div class="preview" @click="makeLarge" v-if="mode === 'small'">
      <transition name="fade">
        <simple-image :src="small" />
      </transition>
    </div>
    <div @click="makeSmall" v-else>
      <transition name="fade">
        <simple-image :src="large" />
        <!-- These aren't going to be used anymore since we now use fullscreen-image
        <simple-image v-if="isImage" :src="large" />
        <video v-else autoplay loop :src="large"/> -->
      </transition>
    </div>
  </div>
</template>

<script>
import EventBus from "@/mixins/bus";
import SimpleImage from "@/vue-simple-image";

export default {
  props: ["item", "alwaysLarge"],

  components: { SimpleImage },

  mixins: [EventBus],

  data() {
    const board = this.$route.params.board;
    const { w, h, tn_w, tn_h, tim, ext } = this.item;
    const large = `/api/media/${board}/${tim}${ext}`;
    const small = `/api/media/${board}/${tim}s.jpg`;
    const isImage = [".gif", ".jpg", ".jpeg", ".png"].includes(ext);
    const height = "auto";
    // const mode = this.alwaysLarge && isImage ? "large" : "small";
    const mode = "small";
    return { height, large, small, mode, isImage };
  },

  watch: {
    mode() {
      this.setHeight();
    }
  },

  mounted() {
    this.setHeight();
    window.addEventListener("resize", this.setHeight);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.setHeight);
  },

  methods: {
    setHeight() {
      const width = this.$el.offsetWidth;
      const heightL = width / this.item.w * this.item.h;
      const heightS = width / this.item.tn_w * this.item.tn_h;
      const height = this.mode === "large" ? heightL : heightS;
      this.height = `${height}px`;
    },

    makeLarge() {
      this.openLarge();
      // if (!(this.alwaysLarge && this.isImage)) {
      //   const container = this.$el.parentElement.parentElement.offsetWidth - 10;
      //   this.$el.parentElement.style.width = "100%";
      //   this.mode = "large";
      // }
    },

    makeSmall() {
      this.openLarge();
      // if (!(this.alwaysLarge && this.isImage)) {
      //   this.$el.parentElement.style.width = "";
      //   this.mode = "small";
      // }
    },

    openLarge() {
      const el = this.$el.querySelector("img");
      const currentSrc = el.getAttribute("src");
      const { large, small, isImage } = this;
      this.$bus.$emit("image:show", { large, small, isImage, currentSrc });
    }
  }
};
</script>

<style scoped>
.media-container {
  background-color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  background-image: url("../assets/ic_insert_photo_white_24px.svg");
  background-size: 25% 25%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.media-container.play {
  background-image: none;
}

img {
  width: 100%;
  border-radius: 4px;
  vertical-align: middle;
  overflow: hidden;
}

video {
  width: 100%;
  vertical-align: middle;
}

.play .preview {
  overflow: hidden;
  object-fit: contain;
  position: relative;
  width: 100%;
  height: 100%;
}

.play .preview:after {
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