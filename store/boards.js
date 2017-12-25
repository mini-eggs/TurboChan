import Request from "../constants/request";

export default {
  state: () => ({ list: [] }),

  mutations: {
    received(state, { boards }) {
      state.list = boards;
    }
  },

  actions: {
    async request({ commit }) {
      commit("received", await Request("/boards"));
    }
  }
};
