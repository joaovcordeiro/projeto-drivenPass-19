import Joi from "joi";
import { SecureNoteCreateData } from "../services/secureNoteService.js";

export const secureNoteSchema = Joi.object<SecureNoteCreateData>({
    noteTitle: Joi.string().max(50).required(),
    annotation: Joi.string().max(1000).required()
});