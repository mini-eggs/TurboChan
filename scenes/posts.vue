<template>
  <div class="posts-container">
    <tc-loader :show="$store.state.posts.list.length < 1">
      <thread-preview :hideFirstActions="true" :thread="{ posts: $store.state.posts.list }" />
    </tc-loader>
  </div>
</template>

<script>
import TcLoader from "@/components/tc-loader";
import ThreadPreview from "@/components/thread-preview";
export default { components: { ThreadPreview, TcLoader } };
</script>

<style scoped>
/* This is for scroll to quoted posts  */
/* that are sitting on the bottom of  */
/* the page */
.posts-container {
  padding-bottom: 50vh;
}
</style>