async function handleRefresh() {
  if (this.$route.name === "board-page") {
    const { board, page } = this.$route.params;
    this.$router.push({ path: `/${board}/${page}` });
    await this.$store.dispatch("threads/clear");
    window.scrollTo(0, 0);
    const params = { page: 1, ...this.$route.params };
    await this.$store.dispatch("threads/request", params);
  } else if (this.$route.name === "board") {
    this.$router.push({ path: `/${this.$route.params.board}` });
    await this.$store.dispatch("threads/clear");
    window.scrollTo(0, 0);
    const params = { page: 1, ...this.$route.params };
    await this.$store.dispatch("threads/request", params);
  } else if (this.$route.name === "board-thread-thread") {
    await this.$store.dispatch("posts/clear");
    window.scrollTo(0, 0);
    await this.$store.dispatch("posts/request", { ...this.$route.params });
  } else if (this.$route.name === "index") {
    await this.$store.dispatch("boards/clear");
    window.scrollTo(0, 0);
    await this.$store.dispatch("boards/request");
  }
}

export default { methods: { handleRefresh } };
