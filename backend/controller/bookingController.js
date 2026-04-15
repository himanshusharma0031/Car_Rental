import bookingModal from "../model/bookingModal.js";
import UserModal from "../model/userModal.js";
import CarModal from "../model/carModal.js";

//create booking
export const createbooking =async(req,res) =>{
    try{
       const {user,car,startDate,returnDate,totalPrice,price,status} = req.body;
       if(!user || !car || !startDate || !returnDate || !totalPrice || !price){
        return res.status(400).send({
            success:false,
            message:"All fields are required"
        });
       }
       const booking = await bookingModal.create({
        user,
        car,
        startDate,
        returnDate,
        totalPrice,
        price
       })
         res.status(201).send({
            success:true,
            message:"Booking created successfully",
            booking
        });
    }catch(error){
        console.error(error);
        res.status(500).send({
            success:false,
            message:"Error in create booking api",
            error
        });
    }
} 

//Get all bookings
export const getAllBookings = async (req, res) => {
    try{
        const bookings = await bookingModal.find({}).populate("user").populate("car");
        res.status(200).send({
            success:true,
            message:"All bookings fetched successfully",
            Totalbookings:bookings.length,
            bookings
        });
    }catch(error){
        console.error(error);
        res.status(500).send({
            success:false,
            message:"Error in get all booking api",
            error
        });
    }
};

//get booking by id
export const getBookingDetails = async(req,res) =>{
    try{    const bookingId = req.params.id;
        const booking = await bookingModal.findById(bookingId);
        if(!booking){
            return res.status(404).send({ success:false, message:"Booking not found" });
        }
        const user = await UserModal.find({ _id: booking.user });
        const car = await CarModal.find({ _id: booking.car });
        res.status(200).send({
            success:true,
            message:"Booking fetched successfully",
            booking:{
                id:booking._id,
                customerName:user[0].name,
                phone:user[0].phone,
                startDate:booking.startDate,
                returnDate:booking.returnDate,
                price:booking.price,
                totalPrice:booking.totalPrice,
                status:booking.status,
                bookingTime:booking.createdAt,
            }
        })

    }catch(error){
        console.error(error);
        res.status(500).send({
            success:false,
            message:"Error in get booking by id api",
            error
        });
    }
}

//Change booking status
export const updateBookingStatus = async(req,res) =>{
    try{
        const bookingId = req.params.id;
        if(!bookingId){
            return 
        }
        const {status} = req.body;
        const booking = await bookingModal.findByIdAndUpdate(bookingId,{$set:{status}},{returnOriginal:false});
        res.status(200).send({
            success:true,
            message:"Booking status updated successfully",
            booking
        });

    }catch(error){
       console.error(error);
       res.status(500).send({
        success:false,
        message:"Error in update booking status api",
        error
       })
    }
}

//user booking

export const getUserbooking = async(req,res) =>{
    try{
         const userId = req.params.id;
         if(!userId){
            return res.status(400).send({
                success:false,
                message:"userId not found"
            });
         }
         const booking = await bookingModal.find({user:userId});
         if(!booking){
            return res.status(400).send({
                success:false,
                message:"booking not found"
            })
         }
         res.status(200).send({
            success:true,
            message:"Your Bookings",
           Totalbooking: booking.length,
            booking
         })
    }catch(error){
        console.error(error);
        res.status(500).send({
            success:false,
            message:"Error in get userbooking api",
            error
        })
    }
}

//delete booking
export const deleteBooking = async(req,res)=>{
    try{
         const bookingId = req.params.id;
         if(!bookingId){
            return res.status(400).send({
                success:false,
                message:"bookinId not found"
            });
         }
         const booking =  await bookingModal.findByIdAndDelete(bookingId);
            if(!booking){
            return res.status(400).send({
                success:false,
                message:"booking not found"
            })
         }
          res.status(200).send({
            success:true,
            message:"Your Bookings deleted succesfully",
            booking
         })

    }catch(error){
        console.error(error);
        res.status(500).send({
            success:false,
            message:"Error in get deletebooking api",
            error
        })
    }
}