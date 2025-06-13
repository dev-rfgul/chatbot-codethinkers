import express from 'express';

import patternMatch from '../controller/patternMatch.js';

const router = express.Router();

router.post('/pattern-match', patternMatch);

export default router;