import { Request, Response } from "express";
import ResponseModel from "../config/ResponseModel.js";
import * as secureNoteService from "../services/secureNoteService.js";

export async function createSecureNote(req: Request, res: Response) {
    try {
        const secureNote = req.body;
        const token = req.headers.authorization;

        const newSecureNote = await secureNoteService.createSecureNote(secureNote, token);

        res.json(new ResponseModel("SecureNote created successfully", 201, newSecureNote));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getSecureNotes(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;

        if (!token) {
            res.status(401).json(new ResponseModel("Unauthorized", 401));
        }

        const secureNotes = await secureNoteService.getAllSecureNotes(token);

        res.json(new ResponseModel("SecureNotes fetched successfully", 200, secureNotes));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getSecureNote(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const secureNoteId = +req.params.id;

        if (!token) {
            res.status(401).json(new ResponseModel("Unauthorized", 401));
        }

        const secureNote = await secureNoteService.getSecureNoteById(token, secureNoteId);

        res.json(new ResponseModel("SecureNote fetched successfully", 200, secureNote));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function deleteSecureNote(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const secureNoteId = +req.params.id;

        if (!token) {
            res.status(401).json(new ResponseModel("Unauthorized", 401));
        }

        const secureNote = await secureNoteService.deleteSecureNoteById(token, secureNoteId);

        res.json(new ResponseModel("SecureNote deleted successfully", 200, secureNote));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}