<template>
  <thread-preview :thread="{ posts: $store.state.posts.list }" />
</template>

<script>
import ThreadPreview from "@/components/thread-preview";
export default { components: { ThreadPreview } };
</script>