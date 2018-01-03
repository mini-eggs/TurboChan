<template>
  <nuxt-link class="board-link" :to="`/${item.board}`">
    <div>/{{ item.board }}/ - {{ item.title }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
a.board-link {
  display: block;
  color: white;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 7.5px 15px;
  margin-top: 10px;
  border-radius: 4px;
  font-size: 18px;
}

a.board-link:first-of-type {
  margin-top: 15px;
}

a.board-link div {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>