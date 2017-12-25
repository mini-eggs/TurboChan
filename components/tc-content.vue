<template>
  <p :id="item.no" v-html="desc"></p>
</template>

<script>
export default {
  props: ["item"],

  computed: {
    desc() {
      return (this.item.com || "").split("<br><br>").join("");
    }
  },

  mounted() {
    this.$el.querySelectorAll("a").forEach(el => {
      el.addEventListener("click", this.handleClick);
    });
  },

  beforeDestroy() {
    this.$el.querySelectorAll("a").forEach(el => {
      el.removeEventListener("click", this.handleClick);
    });
  },

  methods: {
    handleClick(event) {
      event.stopPropagation();
      event.preventDefault();
      if (event.target.href.indexOf("#p") !== -1) {
        this.handleQuoteClick(event.target.href.split("#p").pop());
      }
    },

    handleQuoteClick(id) {
      console.log(id);
      const el = document.getElementById(id);
      const pos = el.parentElement.parentElement.offsetTop - 75;
      window.scrollTo(0, pos);
    }
  }
};
</script>

<style scoped>
p {
  white-space: pre-line;
  text-overflow: ellipsis;
  line-height: 1.4;
}
</style>

<style>
span.quote {
  color: #389638;
  display: block;
}
</style>