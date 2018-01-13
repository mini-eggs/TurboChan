import { IStore, IActions, IMutations } from "./types";

interface IState {
  input: String;
}

interface IEvent {
  target: HTMLInputElement;
}

const state = (): IState => ({ input: "" });

const mutations: IMutations = {
  updateInput(state: IState, event: IEvent): void {
    state.input = event.target.value;
  }
};

const actions: IActions = {
  async updateInput(store: IStore, event: IEvent): Promise<void> {
    store.commit("updateInput", event);
  }
};

export { IState, state, mutations, actions };
