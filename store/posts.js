import Request from "../constants/request";

export default {
  state: () => ({ list: [] }),

  mutations: {
    received(state, { posts }) {
      state.list = posts;
    }
  },

  actions: {
    async request({ commit }, { board, thread }) {
      commit("received", await Request(`/${board}/thread/${thread}`));
    }
  }
};
