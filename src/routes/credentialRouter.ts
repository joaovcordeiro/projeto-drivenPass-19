import { Router } from "express";
import * as credentialController from "../controllers/credentialController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

const credentialRouter = Router();

credentialRouter.post("/credential/create", validateSchemaMiddleware(credentialSchema), credentialController.createCredential);
credentialRouter.get("/credential", credentialController.getAllCredentials);
credentialRouter.get("/credential/:id", credentialController.getCredential);
credentialRouter.delete("/credential/:id", credentialController.deleteCredential);

export default credentialRouter;