import { Router } from "express";
import Axios from "axios";

const router = Router();

const worksafeOnly = ({ ws_board }) => ws_board === 1;

router.get("/boards", async (_, res) => {
  const next_res = await Axios("https://a.4cdn.org/boards.json");
  next_res.data.boards = next_res.data.boards.filter(worksafeOnly);
  res.json(next_res.data);
});

export default router;
