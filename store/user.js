export default {
  state: () => ({ input: "" }),

  mutations: {
    updateInput(state, event) {
      state.input = event.target.value;
    }
  },

  actions: {
    async updateInput({ commit }, event) {
      commit("updateInput", event);
    }
  }
};
