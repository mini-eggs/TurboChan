import { Router } from "express";
import Request from "../constants/request";

const router = Router();

router.get("/:board/thread/:thread", async (req, res) => {
  const { board, thread } = req.params;
  res.json(await Request(`/${board}/thread/${thread}`));
});

export default router;
