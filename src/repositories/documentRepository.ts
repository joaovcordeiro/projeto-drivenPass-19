import { prisma } from "../config/database.js";
import { DocumentCreateData } from "../services/documentService.js";

export interface Document {
    id: number;
    documentType: string;
    ownerName: string;
    issueDate: string;
    expirationDate: string;
    registrationNumber: string;
    issuingBody: string;
    userId: number;
}

export async function insertDocument(document: DocumentCreateData, userId: number) {
    return {
        document: await prisma.documents.create({
            data: {
                documentType: document.documentType,
                ownerName: document.ownerName,
                issueDate: document.issueDate,
                expirationDate: document.expirationDate,
                registrationNumber: document.registrationNumber,
                issuingBody: document.issuingBody,
                userId: userId
            }
        })
    }
}

export async function getAllDocuments(userId: number) {
    return await prisma.documents.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            documentType: true,
            ownerName: true,
            issueDate: true,
            expirationDate: true,
            registrationNumber: true,
            issuingBody: true,
            userId: true
        }
    })
}

export async function getDocumentById(userId: number, documentId: number) {
    return await prisma.documents.findMany({
        where: {
            userId: userId,
            id: documentId
        },
        select: {
            id: true,
            documentType: true,
            ownerName: true,
            issueDate: true,
            expirationDate: true,
            registrationNumber: true,
            issuingBody: true,
            userId: true
        }
    })
}

export async function deleteDocument(userId: number, documentId: number) {
    return await prisma.documents.deleteMany({
        where: {
            userId: userId,
            id: documentId
        }
    })
}
