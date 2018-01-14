import Request from "../constants/request";
import { IStore, IActions, IMutations } from "./types";

type TPost = any; // TODO

interface IThread {
  posts: Array<TPost>;
}

interface IFormatable {
  threads: Array<{ posts: Array<TPost> }>;
  board: String;
}

interface IState {
  list: Array<IThread>;
}

interface IReceivedThreadData {
  threads: Array<IThread>;
}

interface IRequestThreadProps {
  board: String;
  page: Number;
}

const format = (item: IFormatable): IReceivedThreadData => ({
  threads: item.threads.map((t: IThread) => ({
    posts: t.posts.map((i: TPost) => ({
      ...i,
      board: item.board,
      thread: [...t.posts].shift().no,
      replies: t.posts
        .filter(
          (x: TPost): Boolean => (x.com || "").indexOf(`#p${i.no}`) !== -1
        )
        .map((x: TPost): Number => x.no)
    }))
  }))
});

const state = (): IState => ({ list: [] });

const mutations: IMutations = {
  received(state: IState, data: IReceivedThreadData): void {
    state.list = data.threads;
  },

  empty(state: IState): void {
    state.list = [];
  }
};

const actions: IMutations = {
  async request(store: IStore, props: IRequestThreadProps): Promise<void> {
    store.commit(mutations.empty.name);
    const res = await Request(`/api/${props.board}/${props.page}`);
    const clean = format({ board: props.board, threads: res.data.threads });
    store.commit(mutations.received.name, clean);
  },

  clear(store: IStore): void {
    store.commit(mutations.empty.name);
  }
};

export { IState, state, mutations, actions };
