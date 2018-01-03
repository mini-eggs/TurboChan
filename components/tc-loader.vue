<template>
  <div class="tc-loader-container" :class="{ 'hidden': !show }">
    <section>
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
.tc-loader-container {
  transition-duration: 400ms;
}

.tc-loader-container.hidden {
  transform: translateY(-106px);
}

.tc-loader-container > section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tc-loader-container > section img {
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
