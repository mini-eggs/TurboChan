<template>
  <div>
    <section class="loading-container" :class="{ 'hidden': !show }">
      <transition name="fade">
        <img v-if="show" src="../assets/ic_autorenew_white_24px.svg" />
      </transition>
    </section>
    <transition name="fade">
      <div v-if="!show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default { props: ["show"] };
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 400ms;
}

.loading-container.hidden {
  margin-top: -106px;
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
