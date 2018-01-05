import Axios from "axios";

const baseURL = process.env.BASE_URL;
const server_instance = Axios.create({ baseURL });
const client_instance = Axios.create({});

export default (typeof window === "undefined"
  ? server_instance
  : client_instance);
