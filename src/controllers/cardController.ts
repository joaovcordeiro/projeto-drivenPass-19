import { Request, Response } from "express";
import ResponseModel from "../config/ResponseModel.js";
import * as cardService from "../services/cardService.js";

export async function createCard(req: Request, res: Response) {
    try {
        const card = req.body;
        const token = req.headers.authorization;

        const newCard = await cardService.createCard(card, token);

        res.json(new ResponseModel("Card created successfully", 201, newCard));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getAllCards(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;

        const cards = await cardService.getAllCards(token);

        res.json(new ResponseModel("Cards fetched successfully", 200, cards));

    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getCard(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const cardId = +req.params.id;

        const card = await cardService.getCardById(token, cardId);

        res.json(new ResponseModel("Card fetched successfully", 200, card));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function deleteCard(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const cardId = +req.params.id;

        const card = await cardService.deleteCardById(token, cardId);

        res.json(new ResponseModel("Card deleted successfully", 200, card));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

