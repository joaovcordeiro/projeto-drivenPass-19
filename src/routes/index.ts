import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialRouter from "./credentialRouter.js";
import secureNoteRouter from "./secureNoteRouter.js";
import cardRouter from "./cardRouter.js";
import wifiRouter from "./wifiRoutes.js";
import documentRouter from "./documentRouter.js";

const router = Router();
router.use(authRouter);
router.use(credentialRouter);
router.use(secureNoteRouter);
router.use(cardRouter);
router.use(wifiRouter);
router.use(documentRouter);

export default router;