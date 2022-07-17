import Joi from "joi";
import { DocumentCreateData } from "../services/documentService.js";

export const documentSchema = Joi.object<DocumentCreateData>({
    documentType: Joi.string().valid("rg", "cnh").required(),
    ownerName: Joi.string().required(),
    issueDate: Joi.string().required(),
    expirationDate: Joi.string().required(),
    registrationNumber: Joi.string().required(),
    issuingBody: Joi.string().required()
})