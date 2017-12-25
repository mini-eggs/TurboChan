export const modules = {
  boards: import("./boards"),
  threads: import("./threads"),
  posts: import("./posts"),
  user: import("./user")
};

export const getters = {
  filterdBoards(state) {
    const input = state.user.input.toLowerCase();
    if (input === "") return [];
    return state.boards.list.filter(
      ({ board, title }) =>
        board.toLowerCase().indexOf(input) !== -1 ||
        title.toLowerCase().indexOf(input) !== -1
    );
  }
};
