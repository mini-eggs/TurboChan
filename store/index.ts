import * as boards from "./boards";
import * as threads from "./threads";
import * as posts from "./posts";
import * as user from "./user";
import { IStore, IActions, IMutations } from "./types";

interface IBoard {
  board: String;
  title: String;
}

interface IState {
  boards: boards.IState;
  threads: threads.IState;
  posts: posts.IState;
  user: user.IState;
}

interface IGetters {
  [key: string]: (state: IState) => any;
}

const modules = { boards, threads, posts, user };

const filterWithInput = (input: String) => (item: IBoard) =>
  item.board.toLowerCase().indexOf(input.toLowerCase()) !== -1 ||
  item.title.toLowerCase().indexOf(input.toLowerCase()) !== -1;

const getters: IGetters = {
  filterdBoards(state: IState): Array<IBoard> {
    return state.user.input === ""
      ? []
      : state.boards.list.filter(filterWithInput(state.user.input));
  }
};

export { modules, getters };
