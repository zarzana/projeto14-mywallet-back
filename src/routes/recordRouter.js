import { Router } from 'express';
import { postRecord, getRecord } from '../controllers/recordControllers.js';
import { tokenValidator } from '../validators/tokenValidator.js';
import { recordValidator } from '../validators/recordValidator.js';

const router = Router();

router.post('/records', tokenValidator, recordValidator, postRecord);
router.get('/records', tokenValidator, getRecord);

export default router;