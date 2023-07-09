import { Router } from 'express';
import { postRecord, getRecord } from '../controllers/recordControllers.js';
import { tokenValidator } from '../validators/tokenValidator.js';
import { recordValidator } from '../validators/recordValidator.js';

const router = Router();

router.post('/record', tokenValidator, recordValidator, postRecord);
router.get('/record', getRecord);

export default router;