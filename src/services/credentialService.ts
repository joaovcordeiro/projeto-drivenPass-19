import { Credential } from "../repositories/credentialRepository.js";
import * as credentialRepository from "../repositories/credentialRepository.js";
import Cryptr from "cryptr"
import decodeToken from "../utils/verifyToken.js";
import verifyUserExistsByEmail from "../utils/verifyUserExists.js";
import { decriptPassword } from "../utils/decriptPassword.js";

export type CredentialCreateData = Omit<Credential, "id">;

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export async function createCredential(credential: CredentialCreateData, token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const verifyCrendetial = await credentialRepository.verifyCredentialExistence(id, credential.credentialTitle);

    new URL(credential.url); // validate url

    if (verifyCrendetial.length > 0) {
        throw new Error("Credential already exists");
    }

    const hashedPassword = cryptr.encrypt(credential.password);

    return await credentialRepository.insertCredential({ ...credential, password: hashedPassword }, id);
}

export async function getAllCredentials(token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedCredentials = await credentialRepository.getAllCredentials(id);

    if (encriptedCredentials.length === 0) {
        throw new Error("No credentials found");
    }

    return decriptPassword(encriptedCredentials);
}

export async function getCredentialsById(token: string, credentialId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedCredential = await credentialRepository.getCredential(id, credentialId);

    if (encriptedCredential.length === 0) {
        throw new Error("No credentials found");
    }

    return decriptPassword(encriptedCredential);
}

export async function deleteCredentialById(token: string, credentialId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedCredential = await credentialRepository.getCredential(id, credentialId);

    if (encriptedCredential.length === 0) {
        throw new Error("No credentials found");
    }

    return credentialRepository.deleteCredential(id, credentialId);
}