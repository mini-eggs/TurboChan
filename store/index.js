export const modules = {
  boards: import("./boards"),
  threads: import("./threads"),
  posts: import("./posts"),
  user: import("./user")
};

const filterWithInput = i => ({ board, title }) =>
  board.toLowerCase().indexOf(i.toLowerCase()) !== -1 ||
  title.toLowerCase().indexOf(i.toLowerCase()) !== -1;

export const getters = {
  filterdBoards: state =>
    state.user.input === ""
      ? []
      : state.boards.list.filter(filterWithInput(state.user.input))
};
