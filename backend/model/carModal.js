import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        default:"sedan",
    },
    fuel:{
         type:String,
        default:"petrol",
    },
    seats:{
        type:Number,
        default:4,
    },
    milage:{
        type:Number,
        default:10,
    },
    price:{
        type:Number,
        default:1000,
    },
    about:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    transmission:{
        type:Boolean,
        default:false,
    },
    status:{
        type:Boolean,
        default:false,
    }
},{timestamps:true});

const CarModal = mongoose.model("Car", carSchema);
export default CarModal;