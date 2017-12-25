import { Router } from "express";
import Axios from "axios";

const router = Router();

router.get("/:board/thread/:thread", async (req, res) => {
  const { board, thread } = req.params;
  const next_res = await Axios(
    `https://a.4cdn.org/${board}/thread/${thread}.json`
  );
  res.json(next_res.data);
});

export default router;
