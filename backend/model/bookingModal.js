import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Car",
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    },
    returnDate:{
        type:Date,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["pending","confirm","cancel"],
        default:"pending",
    }
},{timestamps:true});

const bookingModal = mongoose.model('booking', bookingSchema);
export default bookingModal;