import React from 'react';
import {useNavigate}  from "react-router-dom";
import toast from "react-hot-toast";
import "./home.css";

const Home = () => {
  const navigation = useNavigate();
  const logoutUser =()=>{
    localStorage.clear();
    navigation('/login');
    toast.success("User logged out successfully");
  }
  return (
    <>
    <div className='container1' style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}> 
      <h1>Welcome to the Car Rental App</h1>
      <p> "Rent Cars Anytime,AnyWhere" </p>
      <div>
      <button className='btn btn-danger' onClick={logoutUser}>Logout</button>
      </div>
    </div>
    </>
  );
};

export default Home;