import Axios from "axios";
import { API_BASE } from "@/constants/";

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
      const res = await Axios(`${API_BASE}/api/${board}/thread/${thread}`);
      commit("received", res.data);
    }
  }
};
