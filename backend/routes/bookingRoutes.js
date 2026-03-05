import express from "express";
import { userAuth,isAdmin } from "../middleware/authmiddleware.js";
import { createbooking,getAllBookings,getBookingDetails,updateBookingStatus,getUserbooking} from "../controller/bookingController.js";

const router = express.Router();

router.post('/createbooking',userAuth,createbooking);
router.get('/getallbookings',getAllBookings);
router.get('/getbooking/:id',userAuth,isAdmin,getBookingDetails);
router.patch('/updatestatus/:id',userAuth,isAdmin,updateBookingStatus);
router.get('/userbooking/:id',userAuth,getUserbooking);

export default router;