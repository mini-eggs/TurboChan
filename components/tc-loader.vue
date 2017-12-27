<template>
  <transition name="fade">
    <section v-if="show" class="loading-container">
      <img src="../assets/ic_autorenew_white_24px.svg" />
    </section>
  </transition>
</template>

<script>
export default { props: ["show"] };
</script>

<style scoped>
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-container img {
  width: 30px;
  animation: Spin 2s infinite linear;
}

@keyframes Spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
