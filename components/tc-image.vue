<template>
  <img v-if="hasLoaded" :src="blob" />
</template>

<script>
import Axios from "axios";

// This is so we do not have to try/catch
// every time we cancel an image fetch
const mockedToken = { cancel: () => undefined };

export default {
  props: ["src"],

  data: () => ({ hasLoaded: false, blob: null, cancelToken: mockedToken }),

  watch: {
    src() {
      this.cancelToken.cancel("Cancelling image fetch.");
      this.loadImage();
    }
  },

  mounted() {
    this.loadImage();
  },

  beforeDestroy() {
    this.cancelToken.cancel("Cancelling image fetch.");
  },

  methods: {
    async loadImage() {
      // Set cancel token
      const cancelToken = Axios.CancelToken;
      const source = cancelToken.source();
      this.cancelToken = source;
      // Init request
      const opts = { responseType: "blob" };
      const res = await Axios(this.src, { cancelToken: source.token, ...opts });
      // Set data
      this.blob = (window.URL || window.webkitURL).createObjectURL(res.data);
      this.hasLoaded = true;
    }
  }
};
</script>