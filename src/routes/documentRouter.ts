import Router from 'express';
import { documentSchema } from '../schemas/documentSchema.js';
import * as documentController from '../controllers/documentController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';

const documentRouter = Router();
documentRouter.post('/document/create', validateSchemaMiddleware(documentSchema), documentController.createDocument);
documentRouter.get('/document', documentController.getAllDocuments);
documentRouter.get('/document/:id', documentController.getDocument);
documentRouter.delete('/document/:id', documentController.deleteDocument);

export default documentRouter;