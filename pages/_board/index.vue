<template>
  <div>
    <thread-preview v-for="item in $store.state.threads.list" :key="item.posts[0].no" :thread="item"/>
    <section v-if="$store.state.threads.list.length > 0">
      <button v-if="page > 1" @click="handlePage(-1)" class="prev">PREV</button>
      <button v-if="page < 10" @click="handlePage(1)" class="next">NEXT</button>
    </section>
  </div>
</template>

<script>
import ThreadPreview from "@/components/thread-preview";

export default {
  components: {
    ThreadPreview
  },

  data: () => ({ page: 1 }),

  async fetch({ store, params }) {
    await store.dispatch("threads/request", { page: 1, ...params });
  },

  head() {
    return { title: `/${this.$route.params.board}/ - TurboChan` };
  },

  methods: {
    handlePage(dir) {
      const page = this.page + dir;
      this.$store.dispatch("threads/request", { page, ...this.$route.params });
      window.scrollTo(0, 0);
      this.page = page;
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