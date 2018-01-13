export interface IStore {
  commit(MutationFunctionName: String, MutationData?: any): void;
}

export interface IMutations {
  [key: string]: Function;
}

export interface IActions {
  [key: string]: Function;
}
