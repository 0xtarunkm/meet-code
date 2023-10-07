import express from 'express';
const router = express.Router();

import { runCode } from '../controllers/code-submit';

router.post('/run', runCode);

export default router;
