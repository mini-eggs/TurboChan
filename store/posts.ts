import Request from "../constants/request";
import { IStore, IActions, IMutations } from "./types";

type TPost = any;

interface IState {
  list: Array<TPost>;
}

interface IReceivedPostData {
  posts: Array<TPost>;
}

interface IRequestPostProps {
  board: String;
  thread: String;
}

interface IFormatRequest {
  data: IReceivedPostData;
  props: IRequestPostProps;
}

const format = (res: IFormatRequest): IReceivedPostData => ({
  posts: res.data.posts.map((i: TPost) => ({
    ...i,
    image_large: `/api/media/${res.props.board}/${i.tim}${i.ext}`,
    image_small: `/api/media/${res.props.board}/${i.tim}s.jpg`,
    isImage: [".gif", ".jpg", ".jpeg", ".png"].includes(i.ext),
    replies: res.data.posts
      .filter((x: TPost): Boolean => (x.com || "").indexOf(`#p${i.no}`) !== -1)
      .map((x: TPost): Number => x.no)
  }))
});

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
    store.commit(mutations.received.name, format({ data: res.data, props }));
  },

  clear(store: IStore): void {
    store.commit(mutations.empty.name);
  }
};

export { IState, state, mutations, actions };
