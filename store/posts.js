import Request from "@/constants/request";

export default {
  state: () => ({ list: [] }),

  mutations: {
    received(state, { posts }) {
      state.list = posts;
    }
  },

  actions: {
    async request({ commit }, { board, thread }) {
      commit("received", { posts: [] });
      const res = await Request(`/api/${board}/thread/${thread}`);
      commit("received", res.data);
    },
    clear({ commit }) {
      commit("received", { posts: [] });
    }
  }
};
