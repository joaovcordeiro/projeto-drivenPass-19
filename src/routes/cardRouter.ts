import { Router } from "express";
import { cardSchema } from "../schemas/cardSchema.js";
import * as cardController from "../controllers/cardController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";


const cardRouter = Router();
cardRouter.post("/card/create", validateSchemaMiddleware(cardSchema), cardController.createCard);
cardRouter.get("/card", cardController.getAllCards);
cardRouter.get("/card/:id", cardController.getCard);
cardRouter.delete("/card/:id", cardController.deleteCard);


export default cardRouter;