import { prisma } from "../config/database.js";
import { CredentialCreateData } from "../services/credentialService.js";

export interface Credential {
    id: number;
    userName: string;
    url: string;
    password: string;
    credentialTitle: string;
    userId: number;
}

export async function insertCredential(credential: CredentialCreateData, userId: number) {
    return {
        credential: await prisma.credentials.create({
            data: {
                userName: credential.userName,
                url: credential.url,
                password: credential.password,
                credentialTitle: credential.credentialTitle,
                userId: userId
            }
        })
    }
}

export async function verifyCredentialExistence(userId: number, credentialTitle: string) {
    return await prisma.credentials.findMany({
        where: {
            userId: userId,
            credentialTitle: credentialTitle
        },
        select: {
            credentialTitle: true
        }
    })
}

export async function getAllCredentials(userId: number) {
    return await prisma.credentials.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            userName: true,
            url: true,
            password: true,
            credentialTitle: true,
            userId: true
        }
    })
}

export async function getCredential(userId: number, credentialId: number) {
    return await prisma.credentials.findMany({
        where: {
            userId: userId,
            id: credentialId
        },
        select: {
            id: true,
            userName: true,
            url: true,
            password: true,
            credentialTitle: true,
            userId: true
        }
    })
}

export async function deleteCredential(userId: number, credentialId: number) {
    return await prisma.credentials.deleteMany({
        where: {
            userId: userId,
            id: credentialId
        }
    })
}