import Request from "../constants/request";

export default {
  state: () => ({ list: [] }),

  mutations: {
    received(state, { threads }) {
      state.list = threads;
    }
  },

  actions: {
    async request({ commit }, { board, page }) {
      commit("received", { threads: [] });
      commit("received", await Request(`/${board}/${page}`));
    }
  }
};
