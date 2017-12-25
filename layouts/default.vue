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
