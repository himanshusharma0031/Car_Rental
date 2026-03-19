import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import axios from "axios";
import "./Login.css";
const API = process.env.REACT_APP_API_URL;
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      if(!email || !password){
        return toast.error("please enter email or password");
      }
      const res = await axios.post(`${API}/api/v1/user/login`,{email,password});
      console.log(res.data);

    // console.log(res.data.user.isAdmin);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("User",res.data.user._id);
      localStorage.setItem("Name",res.data.user.name);
      localStorage.setItem("Phone",res.data.user.phone);
      localStorage.setItem("Email",res.data.user.email);
      console.log("Token saved",localStorage.getItem("token"));
      console.log("User id",localStorage.getItem("User"));
       console.log("phone",localStorage.getItem("Phone"));
        console.log("name",localStorage.getItem("Name"));
         console.log("email",localStorage.getItem("Email"));
      navigation('/cars');
      
      
    }catch(error){
      console.log("erorr in login");
      toast.error(" wrong credentials");
    }
  }
  return (
    <>
    <div className="login-container">
      <div className="login-card">
      <h1 >Login</h1>
      <form className="login-form">
        <div>
          <label htmlFor='input'>Email:</label>
          <input
          id='input' type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input id='password' type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-btn" onClick ={(e)=>handleSubmit(e)} >Login</button>
      </form>
      </div>
    </div>
    </>
  );
};

export default Login;