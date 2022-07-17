import * as secureNoteRepository from '../repositories/secureNoteRepository.js';
import decodeToken from '../utils/verifyToken.js';
import verifyUserExistsByEmail from "../utils/verifyUserExists.js";

export type SecureNoteCreateData = Omit<secureNoteRepository.SecureNote, 'id'>;

export async function createSecureNote(secureNote: SecureNoteCreateData, token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const verifySecureNote = await secureNoteRepository.verifySecureNoteExistence(id, secureNote.noteTitle);

    if (verifySecureNote.length > 0) {
        throw new Error("Secure note already exists");
    }

    return await secureNoteRepository.insertSecureNote(secureNote, id);

}

export async function getAllSecureNotes(token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const secureNotes = await secureNoteRepository.getAllsecureNotes(id);

    if (secureNotes.length === 0) {
        throw new Error("No secure notes found");
    }

    return secureNotes;
}

export async function getSecureNoteById(token: string, secureNoteId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const secureNote = await secureNoteRepository.getSecureNote(id, secureNoteId);

    if (secureNote.length === 0) {
        throw new Error("No secure notes found");
    }

    return secureNote;
}

export async function deleteSecureNoteById(token: string, secureNoteId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const secureNote = await secureNoteRepository.getSecureNote(id, secureNoteId);

    if (secureNote.length === 0) {
        throw new Error("No secure notes found");
    }

    return secureNoteRepository.deleteSecureNote(id, secureNoteId);
}