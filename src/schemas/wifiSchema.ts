import Joi from "joi";
import { WifiCreateData } from "../services/wifiService.js";

export const wifiSchema = Joi.object<WifiCreateData>({
    networkName: Joi.string().required(),
    wifiTitle: Joi.string().required(),
    password: Joi.string().required(),
})