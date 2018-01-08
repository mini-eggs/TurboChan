<template>
  <section class="fullscreen-image" v-if="show">
    <img v-if="loading" class="loading" src="../assets/ic_autorenew_white_24px.svg" />
    <template v-if="isImage">
      <simple-image class="media" :src="small" :onComplete="handleComplete" :onFail="handleFail" />
      <simple-image class="media" :src="large" :onComplete="handleComplete" :onFail="handleFail" />
    </template>
    <video v-else class="media" autoplay loop controls :poster="small">
      <source :src="large" type="video/webm">
    </video>
    <img @click="handleClose" class="close" src="../assets/ic_close_white_24px.svg" />
  </section>
</template>

<script>
import SimpleImage from "@/vue-simple-image";
import { on as DisableScroll, off as EnableScroll } from "no-scroll";
import EventBus from "@/mixins/bus";

const initialState = {
  large: null,
  small: null,
  show: false,
  loading: true,
  isImage: true
};

export default {
  mixins: [EventBus],

  data: () => ({ ...initialState }),

  components: { SimpleImage },

  mounted() {
    this.$bus.$on("image:show", this.open);
  },

  methods: {
    open({ large, small, isImage, currentSrc }) {
      DisableScroll();
      this.isImage = isImage;
      this.large = large;
      // this.small = small;
      this.small = currentSrc;
      this.show = true;
    },
    handleClose() {
      EnableScroll();
      Object.assign(this.$data, initialState);
    },
    handleComplete() {
      this.loading = false;
    },
    handleFail() {
      this.handleClose();
    }
  }
};
</script>

<style>
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: #343442;
}

.fullscreen-image img {
  vertical-align: middle;
}

.fullscreen-image video.media,
.fullscreen-image img.media {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: calc(100% - 60px * 2);
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.fullscreen-image img.close {
  width: 30px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: calc(100% / (4 * 2) - 15px);
}

.fullscreen-image img.loading {
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: -15px;
  animation: Spin 2s infinite linear;
}
</style>
