<template>
  <div>
    <tc-loader :show="$store.state.posts.list.length < 1" />
    <thread-preview :hideFirstActions="true" :thread="{ posts: $store.state.posts.list }" />
  </div>
</template>

<script>
import TcLoader from "@/components/tc-loader";
import ThreadPreview from "@/components/thread-preview";
export default { components: { ThreadPreview, TcLoader } };
</script>