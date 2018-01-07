<template>
  <section :class="{ 'hide-icon': !internalShow }">
    <center>
      <img src="../assets/ic_autorenew_white_24px.svg" />
    </center>
    <transition name="fade-out-instant">
      <main v-if="!show">
        <slot></slot>
      </main>
    </transition>
  </section>
</template>

<script>
import Refresh from "@/mixins/refresh";
import DownIcon from "@/assets/ic_arrow_downward_white_24dp_2x.png";
import UpIcon from "@/assets/ic_arrow_upward_white_24px.svg";
import RefreshIcon from "@/assets/ic_autorenew_white_24px.svg";
import { init as Pull } from "pulljs";

export default {
  props: ["show"],

  mixins: [Refresh],

  watch: {
    show(value) {
      if (!value && this.internalShow) {
        this.internalShow = false;
      }
    }
  },

  data() {
    return { internalShow: this.show };
  },

  mounted() {
    Pull({
      mainElement: this.$el,
      onRefresh: () => this.handleRefresh(),
      instructionsPullToRefresh: `<img src="${DownIcon}" />`,
      instructionsReleaseToRefresh: `<img src="${UpIcon}" />`,
      instructionsRefreshing: `<img class="spin" src="${RefreshIcon}" />`
    });
  }
};
</script>

<style scoped>
center {
  padding-top: 15px;
  transition-duration: 400ms;
}
.hide-list main {
  opacity: 0;
}

center img {
  width: 30px !important;
  animation: Spin 2s infinite linear;
}

.hide-icon center {
  margin-top: calc(-34px + -15px);
  animation-name: Out;
  animation-fill-mode: forwards;
  animation-delay: 400ms;
}
</style>

<style>
.ptr--ptr {
  background-color: transparent !important;
}

.ptr--ptr img {
  width: 30px !important;
}

.ptr--ptr img.spin {
  animation: Spin 2s infinite linear;
}

.ptr--ptr .ptr--box {
  padding-bottom: 5px;
}

.ptr--ptr .ptr--text {
  display: flex;
  height: 45px;
  align-items: flex-end;
  justify-content: center;
}

@keyframes Spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes Out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>