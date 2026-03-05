import JWT from "jsonwebtoken";
import UserModal from "../model/userModal.js";

export const userAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Unauthorized"
    });
  }
  try {
    const user = JWT.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).send({
      success: false,
      message: "Unauthorized"
    });
  }
};

//admin middleware
export const isAdmin =async(req,res,next)=>{
    try{
        const user = await UserModal.findById(req.user.id);
        if(user.isAdmin !== true){
            return res.status(401).send({
                success:false,
                message:"Unauthorized"
            });
        }
        else{
            next();
        }
    }catch(error){
       console.error(error);
       res.status(402).send({
        success:false,
        message:"Error in admin middleware",
        error
       });
    }
}
