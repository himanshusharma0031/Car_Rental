import express from 'express';
import {register,login, updateUser} from '../controller/userController.js';
import { userAuth } from '../middleware/authmiddleware.js';
const router = express.Router();

router.post('/register', register);
router.post('/login',login);
router.patch('/update/:id',userAuth,updateUser);

export default router;