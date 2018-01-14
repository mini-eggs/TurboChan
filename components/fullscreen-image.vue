<template>
  <section class="fullscreen-image" v-if="show">
    <div>
      
      <!-- slider -->
      <carousel ref="carousel" :perPage="1" @pageChange="handlePageChange">
        <slide v-for="(item, index) in items" :key="index">

          <template v-if="item.show">
            <!-- image -->
            <template v-if="item.isImage">
              <simple-image class="media" :src="item.image_small" :onComplete="() => handleComplete(index)" :onFail="handleImageFail" />
              <simple-image class="media" :src="item.image_large" :onComplete="() => handleComplete(index)" :onFail="handleImageFail" />
            </template>

            <!-- video -->
            <video v-else class="media" loop autoplay controls :poster="item.image_small" @canplay="() => handleComplete(index)" >
              <source :src="item.image_large" type="video/webm" @error.once="handleVideoFail">
            </video>
          </template>

          <!-- loading -->
          <img v-if="item.loading" class="loading" src="../assets/ic_autorenew_white_24px.svg" />

        </slide>
      </carousel>

      <!-- close -->
      <img @click="handleClose" class="close" src="../assets/ic_close_white_24px.svg" />

      <!-- position -->
      <strong class="position">{{ position + 1 }} / {{ items.length }}</strong>

    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import SimpleImage from "@/vue-simple-image";
import { on as DisableScroll, off as EnableScroll } from "no-scroll";
import EventBus from "@/mixins/bus";

const VIDEO_FAIL =
  "Video has failed to load. If you're on an Apple device it may be due to Apple's non-support for the webm video format.";

const initialState = {
  items: [],
  show: false,
  position: 0
};

export default {
  mixins: [EventBus],

  data: () => ({ ...initialState }),

  components: { SimpleImage, Carousel, Slide },

  mounted() {
    this.$bus.$on("image:show", this.open);
  },

  methods: {
    open({ no, thread }) {
      DisableScroll();

      // helpers
      const isMedia = ({ ext }) => Boolean(ext);
      const findByThread = item => [...item.posts].shift().thread === thread;
      const getPosts = ({ posts }) => posts;

      // format posts
      let posts = this.$store.state.posts.list;
      posts = posts.filter(isMedia);

      // format threads
      let threads = this.$store.state.threads.list;
      threads = threads.filter(findByThread).map(getPosts);
      threads = (threads.shift() || []).filter(isMedia);

      const media =
        typeof this.$route.params.thread !== "undefined" ? posts : threads;
      const position = media.reduce((t, x, i) => (x.no === no ? i : t), 0);

      this.position = position;
      this.items = media.map(i => ({ ...i, loading: true, show: false }));
      this.show = true;
      this.$nextTick(this.goToPage);
    },

    goToPage() {
      this.items[this.position].show = true;
      this.$refs.carousel.goToPage(this.position);
    },

    handlePageChange(position) {
      this.position = position;
      this.items[position].show = true;
    },

    handleVideoFail() {
      alert(VIDEO_FAIL);
      this.handleClose();
    },

    handleClose() {
      EnableScroll();
      Object.assign(this.$data, initialState);
    },

    handleComplete(index) {
      this.items[index].loading = false;
    },

    handleImageFail() {
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

.fullscreen-image .position {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 16px;
  line-height: 30px;
}

.fullscreen-image .VueCarousel,
.fullscreen-image .VueCarousel-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fullscreen-image .VueCarousel-inner {
  height: 100%;
}

.fullscreen-image .VueCarousel-slide {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-image .VueCarousel-pagination {
  display: none;
}

.fullscreen-image .VueCarousel-slide {
  text-align: center;
}

.fullscreen-image .VueCarousel-slide .media {
  object-fit: contain;
  margin: 0 auto;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: calc(100% - 120px);
  transform: translate(-50%, -50%);
}

.fullscreen-image > div {
  max-width: 600px;
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
  animation: Spin 2s infinite linear;
}
</style>
