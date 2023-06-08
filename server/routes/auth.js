import { Router } from "express";
const router = Router();

import { signin } from '../controllers/auth.js';

router.post('/signin',signin);


export default router;