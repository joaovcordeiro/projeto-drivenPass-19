import Router from 'express';
import { wifiSchema } from '../schemas/wifiSchema.js';
import * as wifiController from '../controllers/wifiController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';

const wifiRouter = Router();
wifiRouter.post('/wifi/create', validateSchemaMiddleware(wifiSchema), wifiController.createWifi);
wifiRouter.get('/wifi', wifiController.getAllWifis);
wifiRouter.get('/wifi/:id', wifiController.getWifi);
wifiRouter.delete('/wifi/:id', wifiController.deleteWifi);

export default wifiRouter;