import { Router } from "express";
import Request from "../constants/request";

const router = Router();

router.get("/:board/:page", async (req, res) => {
  const { board, page } = req.params;
  res.json(await Request(`/${board}/${page}`));
});

export default router;
