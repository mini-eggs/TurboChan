<template>
  <div>
    <form @submit.prevent.stop="handleSubmit">
      <input autofocus type="text" placeholder="Try 'tech'" @input="$store.dispatch('user/updateInput', $event)" />
    </form>
    <board-intro :item="item" v-for="item in $store.getters.filterdBoards" :key="item.board"/>
  </div>
</template>

<script>
import BoardIntro from "./board-intro";

export default {
  components: { BoardIntro },

  props: ["boards"],

  methods: {
    handleSubmit() {
      const first = this.$store.getters.filterdBoards.shift();
      if (first) {
        this.$router.push({ path: `/${first.board}` });
      }
    }
  },

  destroyed() {
    this.$store.dispatch("user/updateInput", { target: { value: "" } });
  }
};
</script>

<style scoped>
form {
  margin-top: 10px;
  display: flex;
}

form input {
  border: none;
  padding: 7.5px 15px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 18px;
  width: 100%;
}
</style>