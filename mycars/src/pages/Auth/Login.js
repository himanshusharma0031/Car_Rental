import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import axios from "axios";
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
      const res = await axios.post("http://localhost:8000/api/v1/user/login",{email,password});
      console.log(res.data);


      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedInUser",res.data._id);
      console.log("Token saved",localStorage.getItem("token"));
      navigation('/cars');
      // console.log("User Logged In", {email, password});
      // toast.success("Login Successful");
      // setEmail('');
      // setPassword('');
      
    }catch(error){
      console.log("Error in registration", error);
    }
  }
  return (
    <>
      <h1>Login</h1>
      <form>
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
        <button className="btn" onClick ={(e)=>handleSubmit(e)} >Login</button>
      </form>
    </>
  );
};

export default Login;