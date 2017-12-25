<template>
  <div>
    <thread-preview v-for="item in $store.state.threads.list" :key="item.posts[0].no" :thread="item"/>
    <div class="pagination" v-if="$store.state.threads.list.length > 0">
      <nuxt-link v-if="page > 1" tag="button" :to="link(-1)"  class="prev">
        <img src="../assets/ic_arrow_back_white_24px.svg" />
      </nuxt-link>
      <nuxt-link v-if="page < 10" tag="button" :to="link(1)" class="next">
        <img src="../assets/ic_arrow_forward_white_24px.svg" />        
      </nuxt-link>
    </div>
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
.pagination {
  padding: 50px 0;
  margin: 0 -10px;
}

.prev,
.next {
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 20%;
}

.prev img,
.next img {
  width: 100%;
  max-width: 30px;
}

.prev {
  float: left;
}

.next {
  float: right;
}
</style>