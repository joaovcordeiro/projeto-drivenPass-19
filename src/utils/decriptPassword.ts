import Cryptr from "cryptr"
import { Credential } from "../repositories/credentialRepository";

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export function decriptPassword(encripteds) {
    return encripteds.map((encripted: Credential) => {
        return {
            ...encripted,
            password: cryptr.decrypt(encripted.password)
        }
    })
}