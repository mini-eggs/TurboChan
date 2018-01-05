import Request from "@/constants/request";

export default {
  state: () => ({ list: [] }),

  mutations: {
    received(state, { boards }) {
      state.list = boards;
    }
  },

  actions: {
    async request({ commit }) {
      const res = await Request(`/api/boards`);
      commit("received", res.data);
    },
    clear({ commit }) {
      commit("received", { boards: [] });
    }
  }
};
