<template>
  <div>
    <thread-preview v-for="item in $store.state.threads.list" :key="item.posts[0].no" :thread="item"/>
    <section v-if="$store.state.threads.list.length > 0">
      <nuxt-link v-if="page > 1" tag="button" :to="link(-1)"  class="prev">PREV</nuxt-link>
      <nuxt-link v-if="page < 10" tag="button" :to="link(1)" class="next">NEXT</nuxt-link>
    </section>
  </div>
</template>

<script>
import ThreadPreview from "@/components/thread-preview";

export default {
  components: {
    ThreadPreview
  },

  computed: {
    page() {
      return parseInt(this.$route.params.page) || 1;
    }
  },

  methods: {
    link(dir) {
      return `/${this.$route.params.board}/${this.page + dir}`;
    }
  }
};
</script>

<style scoped>
section {
  padding: 50px 0 30px;
}

.prev,
.next {
  cursor: pointer;
  border: none;
  color: white;
  font-weight: bold;
  padding: 7.5px 15px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.25);
}

.prev {
  float: left;
}

.next {
  float: right;
}
</style>