import Axios from "axios";
import { API_BASE } from "@/constants/";

export default {
  state: () => ({ list: [] }),

  mutations: {
    received(state, { boards }) {
      state.list = boards;
    }
  },

  actions: {
    async request({ commit }) {
      const res = await Axios(`${API_BASE}/api/boards`);
      commit("received", res.data);
    }
  }
};
