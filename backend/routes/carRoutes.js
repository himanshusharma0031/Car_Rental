import express from 'express';
import { userAuth,isAdmin } from '../middleware/authmiddleware.js';
import { addCar,getAllCars,getCarDetails,updateCar,deleteCar} from '../controller/carController.js';
const router = express.Router();
import upload from '../middleware/multer.js';

router.post('/addcar', userAuth,isAdmin,upload.single('image'),addCar);
router.get('/getallcars',getAllCars);
router.get('/getcar/:id',getCarDetails);
router.patch('/updatecar/:id',userAuth,isAdmin,updateCar);
router.delete('/deletecar/:id',userAuth,isAdmin,deleteCar);
export default router;