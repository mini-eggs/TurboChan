import { Router } from "express";
import Boards from "./boards";
import Threads from "./threads";
import Posts from "./posts";
import Media from "./media";

const router = Router();
router.use(Boards);
router.use(Threads);
router.use(Posts);
router.use(Media);

export default router;
