<template>
  <div>
    <tc-header/>
    <div class="page-container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import TcHeader from "@/components/tc-header";

export default { components: { TcHeader } };
</script>

<style>
html,
body {
  font-family: Roboto, sans-serif;
  margin: 0;
  background-color: #343442;
  color: white;
}

/* splash screen pwa fix for ios */
.splash:before,
.splash:after {
  content: " ";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation-duration: 250ms;
  animation-name: FadeDisappear;
  animation-fill-mode: forwards;
}

.splash:before {
  z-index: 101;
  animation-delay: 1000ms;
  background-color: white;
}

.splash:after {
  z-index: 102;
  background-image: url("../assets/logo_grey.png");
  background-size: 75px;
  background-position: center center;
  background-repeat: no-repeat;
  animation-duration: 1250ms;
  opacity: 0;
  animation-name: FadeInAndOut;
}

@keyframes FadeDisappear {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 0;
    top: 0;
    left: 0;
  }
  100% {
    opacity: 0;
    top: -999999px;
    left: -999999px;
  }
}

@keyframes FadeInAndOut {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  99% {
    opacity: 0;
    top: 0;
    left: 0;
  }
  100% {
    opacity: 0;
    top: -999999px;
    left: -999999px;
  }
}

/* status bar pwa fix for ios */
body:before {
  content: " ";
  position: fixed;
  top: -25px;
  left: 0;
  width: 100%;
  height: 25px;
  background-color: #343442;
  z-index: 100;
}

* {
  margin: 0;
  padding: 0;
}

.page-container {
  max-width: 600px;
  padding: 0 10px;
  margin: 0 auto 15px;
}

input {
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select {
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

a {
  color: #bd3d24;
}
</style>
