<template>
  <div>
    <form action="/search" @submit.prevent.stop="handleSubmit">
      <input autocomplete="off" autofocus="true" type="text" placeholder="Try 'tech'" name="board" @input="$store.dispatch('user/updateInput', $event)" />
    </form>
    <board-intro :item="item" v-for="item in $store.getters.filterdBoards" :key="item.board"/>
  </div>
</template>

<script>
import BoardIntro from "./board-intro";

export default {
  components: { BoardIntro },

  props: ["boards"],

  mounted() {
    this.$el.querySelector("input").focus();
  },

  destroyed() {
    this.$store.dispatch("user/updateInput", { target: { value: "" } });
  },

  methods: {
    handleSubmit() {
      if (this.$store.getters.filterdBoards.length > 0) {
        this.$router.push({ path: `/${this.$store.getters.filterdBoards.shift().board}` });
      }
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 15px;
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