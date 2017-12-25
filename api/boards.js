import { Router } from "express";
import Axios from "axios";

const router = Router();

router.get("/boards", async (_, res) => {
  const next_res = await Axios("https://a.4cdn.org/boards.json");
  res.json(next_res.data);
});

export default router;
