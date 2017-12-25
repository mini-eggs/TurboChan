import { Router } from "express";
import Request from "../constants/request";

const router = Router();

router.get("/boards", async (_, res) => {
  res.json(await Request("/boards"));
});

export default router;
