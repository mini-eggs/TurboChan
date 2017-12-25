import { Router } from "express";
import Axios from "axios";

const router = Router();

router.get("/:board/:page", async (req, res) => {
  const { board, page } = req.params;
  const next_res = await Axios(`https://a.4cdn.org/${board}/${page}.json`);
  res.json(next_res.data);
});

export default router;
