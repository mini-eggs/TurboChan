<template>
  <section class="fullscreen-image" v-if="show">
    <simple-image class="media" :src="small" />
    <simple-image class="media" :src="large" />
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
  show: false
};

export default {
  mixins: [EventBus],

  data: () => ({ ...initialState }),

  components: { SimpleImage },

  mounted() {
    this.$bus.$on("image:show", this.open);
  },

  methods: {
    open({ large, small }) {
      DisableScroll();
      this.large = large;
      this.small = small;
      this.show = true;
    },
    handleClose() {
      EnableScroll();
      Object.assign(this.$data, initialState);
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
  position: absolute;
  top: 15px;
  left: calc(100% / (4 * 2) - 15px);
}
</style>
