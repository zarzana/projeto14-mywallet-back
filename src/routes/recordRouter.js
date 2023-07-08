import { Router } from 'express';
import { postRecord, getRecord } from '../controllers/recordControllers.js';

const router = Router();

router.post('/record', postRecord);
router.get('/record', getRecord);

export default router;