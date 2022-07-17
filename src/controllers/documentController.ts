import { Request, Response } from "express";
import ResponseModel from "../config/ResponseModel.js";
import * as documentService from "../services/documentService.js";

export async function createDocument(req: Request, res: Response) {
    try {
        const document = req.body;
        const token = req.headers.authorization;

        const newDocument = await documentService.createDocument(document, token);

        res.json(new ResponseModel("Document created successfully", 201, newDocument));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getAllDocuments(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;

        const documents = await documentService.getAllDocuments(token);

        res.json(new ResponseModel("Documents fetched successfully", 200, documents));

    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getDocument(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const documentId = +req.params.id;

        const document = await documentService.getDocument(token, documentId);

        res.json(new ResponseModel("Document fetched successfully", 200, document));

    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function deleteDocument(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const documentId = +req.params.id;

        const document = await documentService.deleteDocument(token, documentId);

        res.json(new ResponseModel("Document deleted successfully", 200, document));

    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}