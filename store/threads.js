import Request from "@/constants/request";

Array.prototype.first = function() {
  return [...this].shift().no;
};

const format = ({ board, threads }) => ({
  threads: threads.map(t => ({
    posts: t.posts.map(i => ({
      ...i,
      board,
      thread: t.posts.first()
    }))
  }))
});

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
      const res = await Request(`/api/${board}/${page}`);
      commit("received", format({ board, threads: res.data.threads }));
    },
    clear({ commit }) {
      commit("received", { threads: [] });
    }
  }
};
