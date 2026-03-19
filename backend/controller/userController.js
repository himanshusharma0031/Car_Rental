import UserModal from "../model/userModal.js";
//import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
//register

export const register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  if(!name || !email || !password || !phone) {
    return res.status(400).send({
        success: false,
        message: "All fields are required"
    });
  }
  //existing user
  const existingUser = await UserModal.findOne({ email });
  if (existingUser) {
    return res.status(400).send({
      success: false,
      message: "User already exists"
    });
  }
 //hashed password
//  const salt = await bcrypt.genSalt(10);
//  const hashedPassword = await bcrypt.hash(password, salt);


  try {
    const newUser = await UserModal.create({
      name,
      email,
      password,                              //hashedPassword,
      phone
    });


    res.status(201).send({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ success: false, message: "Error registering user", error });
  }
};

//login
export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"All fields are required"
            });
        }
        const user = await UserModal.findOne({email});
        if(!user){
            return res.status(400).send({
                success:false,
                message:"User not found"
            });
        }
       //  const isMatch = await bcrypt.compare(password,user.password);
        // if(!isMatch)
        // {
        //     return res.status(500).send({
        //         success:false,
        //         message:"Invalid credentials"
        //     });
        // }

         if(password != user.password)
        {
            return res.status(500).send({
                success:false,
                message:"Invalid credentials"
            });
        }
        //token 
        const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"90d"});
        user.password = undefined;
        res.status(200).send({
            success:true,
            message:"User logged in successfully",
            token,
            user
        });

    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).send({ success: false, message: "Error logging in user", error });
    }
}

export const loginn =async(req,res)=>{
    try{
       const{email,password} = req.body;
       if(!email || !password){
        return res.status(400).send({
            success:false,
            message:"all fields are required"
        })
       }

       const user = await UserModal.findOne({email,isAdmin:true});
       if(!user)
       {
          return res.status(400).send({
                success:false,
                message:"User not found"
            });
       }

          if(password != user.password)
        {
            return res.status(500).send({
                success:false,
                message:"Invalid credentials"
            });
        }
        //token 
        const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"90d"});
        user.password = undefined;
        res.status(200).send({
            success:true,
            message:"Admin logged in successfully",
            token,
            user
        });
    }catch(error){
        console.error("Error logging in admin",error);
        res.status(500).send({success:false,message:"Error logging in admin",error})
    }
}

//Update user
export const updateUser = async(req,res) =>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).send({
                success:false,
                message:"User id is required"
            });
        }
        const data =req.body;
        const user = await UserModal.findByIdAndUpdate(id,{$set:data},{returnOriginal:false});
        res.status(200).send({ success: true, message: "User updated successfully", user });
    }catch(error){
        console.error("Error updating user:", error);
        res.status(500).send({ success: false, message: "Error updating user", error });
    }
}