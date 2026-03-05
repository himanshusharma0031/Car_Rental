import mongoose from "mongoose";

const connectDb = async() =>{
    try{
     const URI = process.env.MONGO_URI;
     const conn = await mongoose.connect(URI);
     if(conn)
        {
     console.log(`Connected to mongodb database ${mongoose.connection.host}`);
    }
}catch(error){
        console.log(error);
    }
};

export default connectDb;