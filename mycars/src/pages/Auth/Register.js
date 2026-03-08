import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import axios from 'axios';
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
      const res = await axios.post("http://localhost:8000/api/v1/user/register",{name,email,password,phone});
      console.log("Registration Response", res.data);
      alert("Registration successful");
      navigation('/login');
      // console.log("User Registered", {name, email, password, phone});
      // toast.success("Registration Successful");
      // setName('');
      // setEmail('');
      // setPassword('');
      // setPhone('');
      // navigation('/login');
    }catch(error){
      console.log("Error in registration", error);
    }
  }
  return (
    <>
      <h1>Register</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        </div>
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
        <div>
          <label>Phone:</label>
          <input type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button className="btn" onClick ={(e)=>handleSubmit(e)} >Register</button>
      </form>
    </>
  );
};

export default Register;
