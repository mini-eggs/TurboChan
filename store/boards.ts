import Request from "../constants/request";
import { IStore, IActions, IMutations } from "./types";

interface IState {
  list: Array<any>;
}

interface IReceivedBoardData {
  data: { boards: Array<any> };
}

const state = (): IState => ({ list: [] });

const mutations: IMutations = {
  received(state: IState, res: IReceivedBoardData): void {
    state.list = res.data.boards;
  },

  empty(state: IState): void {
    state.list = [];
  }
};

const actions: IActions = {
  async request(store: IStore): Promise<void> {
    store.commit(mutations.received.name, await Request("/api/boards"));
  },

  clear(store: IStore): void {
    store.commit(mutations.received.name);
  }
};

export { IState, state, mutations, actions };
