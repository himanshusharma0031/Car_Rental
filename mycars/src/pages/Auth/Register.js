import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import axios from 'axios';
import "./Register.css";
const API = process.env.REACT_APP_API_URL;
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[phone,setPhone]=useState('');
  
  const navigation = useNavigate();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      if(!name || !email || !password || !phone){
        return toast.error("All fields are required");
      }
      const res = await axios.post(`${API}/api/v1/user/register`,{name,email,password,phone});
      console.log("Registration Response", res.data);
      toast.success("Registration successful");
      navigation('/login');
    }catch(error){
      console.log("Error in registration", error);
      toast.error("wrong credentials");
    }
  }
  return (
    <>
    <div className="register-container">
    <div className="register-box">
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor='input'>Name:</label>
          <input id='input' type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='label'>Email:</label>
          <input id='label' type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input id='password' type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id="phone" type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button className="btn" onClick ={(e)=>handleSubmit(e)} >Register</button>
      </form>
      </div>
      </div>
    </>
  );
};

export default Register;
