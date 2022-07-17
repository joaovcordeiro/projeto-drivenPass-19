import { prisma } from "../config/database.js";
import { SecureNoteCreateData } from "../services/secureNoteService.js";

export interface SecureNote {
    id: number;
    noteTitle: string;
    annotation: string;
    userId: number;
}

export async function insertSecureNote(secureNote: SecureNoteCreateData, userId: number) {
    return {
        secureNote: await prisma.secureNotes.create({
            data: {
                noteTitle: secureNote.noteTitle,
                annotation: secureNote.annotation,
                userId: userId
            }
        })
    }
}

export async function verifySecureNoteExistence(userId: number, secureNoteTitle: string) {
    return await prisma.secureNotes.findMany({
        where: {
            userId: userId,
            noteTitle: secureNoteTitle
        },
        select: {
            noteTitle: true
        }
    })
}

export async function getAllsecureNotes(userId: number) {
    return await prisma.secureNotes.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            noteTitle: true,
            annotation: true,
            userId: true
        }
    })
}

export async function getSecureNote(userId: number, secureNoteId: number) {
    return await prisma.secureNotes.findMany({
        where: {
            userId: userId,
            id: secureNoteId
        },
        select: {
            id: true,
            noteTitle: true,
            annotation: true,
            userId: true
        }
    })
}

export async function deleteSecureNote(userId: number, secureNoteId: number) {
    return await prisma.secureNotes.deleteMany({
        where: {
            userId: userId,
            id: secureNoteId
        }
    })
}