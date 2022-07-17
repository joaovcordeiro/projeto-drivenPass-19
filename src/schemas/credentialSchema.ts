import Joi from "joi";
import { CredentialCreateData } from "../services/credentialService.js";

export const credentialSchema = Joi.object<CredentialCreateData>({
    userName: Joi.string().required(),
    url: Joi.string().required(),
    password: Joi.string().min(10).required(),
    credentialTitle: Joi.string().required(),
});