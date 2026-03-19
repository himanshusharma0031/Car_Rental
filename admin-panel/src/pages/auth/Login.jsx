import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import "./Login.css";
const API = import.meta.env.VITE_API_URL;
const Login =() => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigation = useNavigate();
    const handleSubmit =async(e)=>{
       e.preventDefault();
           try{
             if(!email || !password){
               return toast.error("please enter email or password");
             }
             const res = await axios.post(`${API}/api/v1/user/admin-login`,{email,password});
             console.log(res.data);
             localStorage.setItem("token",res.data.token);
             localStorage.setItem("adminId",res.data.user._id);
             console.log(localStorage.getItem("token"));
             console.log(localStorage.getItem("adminId"));
            navigation('/home');
           }catch(error){
             console.log("erorr in login");
             toast.error(" wrong credentials");
           }
    }
    return(
        <>
        <div className="login-container">
      <div className="login-card">
        <h1>ADMIN PANEL</h1>
        <form className="login-form">
        <div>
          <label>Email:</label>
          <input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-btn" onClick ={(e)=>handleSubmit(e)} >Login</button>
      </form>
        </div>
        </div>
        </>
    )
}

export default Login;