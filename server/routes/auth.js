import { Router } from "express";
const router = Router();

import { handlelogout, handlesignin, handlesignup } from '../controllers/auth.js';

router.post('/d/signin', handlesignin); //route will be used for logging in a user.
router.post("/signup", handlesignup);//route will be used for signing up a user.
router.get("/logout", handlelogout); //route will be used for logging out a user.


export default router;