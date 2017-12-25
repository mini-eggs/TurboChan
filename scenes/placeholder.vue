<template>
  <div>
    <section>
      <h1>{{ name }}</h1>
    </section>
  </div>
</template>

<script>
export default { props: ["name"] };
</script>

<style scoped>
section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>