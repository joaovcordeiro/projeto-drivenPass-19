import Joi from "joi";
import { CardCreateData } from "../services/cardService";

export const cardSchema = Joi.object<CardCreateData>({
    cardNumber: Joi.string().required(),
    cardOwnerName: Joi.string().required(),
    securityCode: Joi.string().required(),
    expirationDate: Joi.string().required(),
    password: Joi.string().required(),
    isVirtual: Joi.boolean().required(),
    cardType: Joi.string().valid("credit", "debit", "creditAndDebit").required(),
    cardName: Joi.string().required(),
});