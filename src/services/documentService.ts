import * as documentRepository from '../repositories/documentRepository.js';
import verifyUserExistsByEmail from '../utils/verifyUserExists.js';
import decodeToken from '../utils/verifyToken.js';

export type DocumentCreateData = Omit<documentRepository.Document, 'id'>;

export async function createDocument(document: DocumentCreateData, token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);

    return await documentRepository.insertDocument(document, id);
}

export async function getAllDocuments(token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const documents = await documentRepository.getAllDocuments(id);

    if (documents.length === 0) {
        throw new Error("No documents found");
    }

    return documents;
}

export async function getDocument(token: string, documentId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const document = await documentRepository.getDocumentById(id, documentId);

    if (document.length === 0) {
        throw new Error("No documents found");
    }

    return document;
}

export async function deleteDocument(token: string, documentId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const document = await documentRepository.getDocumentById(id, documentId);

    if (document.length === 0) {
        throw new Error("No documents found");
    }

    return documentRepository.deleteDocument(id, documentId);
}