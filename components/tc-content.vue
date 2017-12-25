<template>
  <p v-html="desc"></p>
</template>

<script>
export default {
  props: ["item"],

  computed: {
    desc() {
      return (this.item.com || "").split("<br><br>").join("");
    }
  }
};
</script>

<style scoped>
p {
  white-space: pre-line;
  text-overflow: ellipsis;
  line-height: 1.4;
}
</style>

<style>
span.quote {
  color: #389638;
  display: block;
}
</style>