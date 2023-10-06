import express from 'express';
const router = express.Router();

import { codeSubmit } from '../controllers/code-submit';

router.post('/run', codeSubmit);

export default router;
