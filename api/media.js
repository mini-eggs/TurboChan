import { Router } from "express";
import Axios from "axios";

const router = Router();

const opts = {
  method: "get",
  responseType: "stream"
};

router.get("/media/:thread/:media", async (req, res) => {
  const { thread, media } = req.params;
  const url = `http://i.4cdn.org/${thread}/${media}`;
  Axios({ ...opts, url: url }).then(({ data }) => data.pipe(res));
});

export default router;
