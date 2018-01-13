import Request from "../constants/request";
import { IStore, IActions, IMutations } from "./types";

interface IState {
  list: Array<any>;
}

interface IReceivedPostData {
  posts: Array<any>;
}

interface IRequestPostProps {
  board: String;
  thread: String;
}

const state = (): IState => ({ list: [] });

const mutations: IMutations = {
  received(state: IState, data: IReceivedPostData): void {
    state.list = data.posts;
  },

  empty(state: IState): void {
    state.list = [];
  }
};

const actions: IActions = {
  async request(store: IStore, props: IRequestPostProps): Promise<void> {
    store.commit(mutations.empty.name);
    const res = await Request(`/api/${props.board}/thread/${props.thread}`);
    store.commit(mutations.received.name, res.data);
  },

  clear(store: IStore): void {
    store.commit(mutations.empty.name);
  }
};

export { IState, state, mutations, actions };
