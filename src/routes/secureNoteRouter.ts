import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import * as SecureNoteController from "../controllers/secureNoteController.js";
import { secureNoteSchema } from "../schemas/secureNoteSchema.js";

const secureNoteRouter = Router();

secureNoteRouter.post("/secureNote/create", validateSchemaMiddleware(secureNoteSchema), SecureNoteController.createSecureNote);
secureNoteRouter.get("/secureNote", SecureNoteController.getSecureNotes);
secureNoteRouter.get("/secureNote/:id", SecureNoteController.getSecureNote);
secureNoteRouter.delete("/secureNote/:id", SecureNoteController.deleteSecureNote);

export default secureNoteRouter;

