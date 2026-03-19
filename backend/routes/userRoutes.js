import express from 'express';
import {register,login, updateUser,loginn} from '../controller/userController.js';
import { userAuth } from '../middleware/authmiddleware.js';
const router = express.Router();

router.post('/register', register);
router.post('/login',login);
router.post('/admin-login',loginn);
router.patch('/update/:id',userAuth,updateUser);

export default router;