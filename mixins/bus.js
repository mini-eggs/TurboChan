import Vue from "vue";

const bus = new Vue();

export default { computed: { $bus: () => bus } };
