import Axios from "axios";

/**
 * The point of this is to build an abstraction over requests from
 * server side and client side. Just call this and don't worry about
 * where and how you're making the request.
 */
export default async url => {
  let next_url = url;

  if (typeof window === "undefined") {
    next_url = `https://a.4cdn.org${url}.json`;
  } else {
    next_url = `/api${next_url}`;
  }

  const res = await Axios(next_url);
  return res.data;
};
