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
  font-family: arial, sans-serif;
  margin: 0;
  background-color: #343442;
  color: white;
}

::-webkit-scrollbar {
  display: none;
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

*:focus {
  border: none;
  outline: rgb(82, 148, 226) auto 5px;
}

.page-container {
  max-width: 600px;
  padding: 0 10px 15px;
  margin: 0 auto;
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

/* Common transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-out-instant-enter-active {
  transition: opacity 0.5s;
}

.fade-out-instant-leave-active {
  transition: opacity 0;
}
.fade-out-instant-enter,
.fade-out-instant-leave-to {
  opacity: 0;
}
</style>
