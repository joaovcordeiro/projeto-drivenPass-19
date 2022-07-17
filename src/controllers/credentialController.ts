import { Request, Response } from "express";
import * as credentialService from '../services/credentialService.js';
import ResponseModel from '../config/ResponseModel.js';


export async function createCredential(req: Request, res: Response) {
    try {
        const credential: credentialService.CredentialCreateData = req.body;
        const token = req.headers.authorization;

        if (!token) {
            res.status(401).json(new ResponseModel("Unauthorized", 401));
        }

        const newCredential = await credentialService.createCredential(credential, token);

        res.json(new ResponseModel("Credential created successfully", 201, newCredential));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getAllCredentials(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const credentials = await credentialService.getAllCredentials(token);

        res.json(new ResponseModel("Credentials fetched successfully", 200, credentials));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getCredential(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const credentialId = +req.params.id;

        const credential = await credentialService.getCredentialsById(token, credentialId);

        res.json(new ResponseModel("Credential fetched successfully", 200, credential));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function deleteCredential(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const credentialId = +req.params.id;

        const credential = await credentialService.deleteCredentialById(token, credentialId);

        res.json(new ResponseModel("Credential deleted successfully", 200, credential));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}