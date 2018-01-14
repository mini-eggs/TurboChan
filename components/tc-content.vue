<template>
  <p :id="item.no"><span v-html="desc"></span><slot></slot></p>
</template>

<script>
import QuoteMixin from "@/mixins/quote";

const mock = {
  stopPropagation: () => undefined,
  preventDefault: () => undefined
};

export default {
  mixins: [QuoteMixin],

  props: ["item"],

  computed: {
    desc() {
      return (this.item.com || "").split("<br><br>").join("<br>");
    }
  },

  mounted() {
    this.$el.querySelectorAll("a").forEach(el => {
      el.addEventListener("click", this.handleClick);
    });

    this.$nextTick(this.checkQuote);
  },

  beforeDestroy() {
    this.$el.querySelectorAll("a").forEach(el => {
      el.removeEventListener("click", this.handleClick);
    });
  },

  methods: {
    checkQuote() {
      this.handleClick({ ...mock, target: { href: window.location.href } });
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