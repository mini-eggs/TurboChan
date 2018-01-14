const methods = {
  handleClick(event) {
    if (event.target.href.indexOf("#p") !== -1) {
      event.stopPropagation();
      event.preventDefault();
      this.handleQuoteClick(event.target.href.split("#p").pop());
    }
  },

  handleQuoteClick(id) {
    if (this.$route.name === "board-thread-thread") {
      /**
       * Sometime the element will not be inserted into DOM
       * and that is OKAY. We run this function every time this
       * component mounts (that can be upwards of 300 times).
       * If we don't scroll now we will scroll later. Don't
       * overthink it.
       */
      try {
        const el = document.getElementById(id);
        const pos = el.parentElement.parentElement.offsetTop - 75;
        window.scrollTo(0, pos);
        const { board, thread } = this.$route.params;
        this.$router.push({ path: `/${board}/thread/${thread}#p${id}` });
      } catch (_) {
        // Don't overthink it I said.
      }
    } else {
      const { board, thread } = this.item;
      this.$router.push({ path: `/${board}/thread/${thread}#p${id}` });
    }
  }
};

export default { methods };
