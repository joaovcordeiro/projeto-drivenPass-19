import { Request, Response } from 'express';
import ResponseModel from '../config/ResponseModel.js';
import * as wifiService from '../services/wifiService.js';

export async function createWifi(req: Request, res: Response) {
    try {
        const wifi = req.body;
        const token = req.headers.authorization;

        const newWifi = await wifiService.createWifi(wifi, token);

        res.json(new ResponseModel("Wifi created successfully", 201, newWifi));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getAllWifis(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;

        const wifis = await wifiService.getAllWifis(token);

        res.json(new ResponseModel("Wifis fetched successfully", 200, wifis));

    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function getWifi(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const wifiId = +req.params.id;

        const wifi = await wifiService.getWifiById(token, wifiId);

        res.json(new ResponseModel("Wifi fetched successfully", 200, wifi));

    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}

export async function deleteWifi(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const wifiId = +req.params.id;

        const wifi = await wifiService.deleteWifiById(token, wifiId);

        res.json(new ResponseModel("Wifi deleted successfully", 200, wifi));

    }
    catch (error) {
        res.status(500).json(new ResponseModel(error.message, 500));
    }
}