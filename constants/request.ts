import Axios from "axios";

declare var process: any; // TODO

const baseURL = process.env.BASE_URL;
const server_instance = Axios.create({ baseURL });
const client_instance = Axios.create();

// TODO
const request: any =
  typeof window === "undefined" ? server_instance : client_instance;

export default request;
