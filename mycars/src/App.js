import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Cars from './pages/Cars/Cars';
import Footer from './components/Footer';
import Header from './components/Header';
import {Toaster} from 'react-hot-toast';
import CarDetails from './pages/Cars/CarDetails';
import Profile from './pages/user/profile';

function App() {
  return (
    <>
    <Header/>
    <Toaster />
     <Routes>
     {/* Public Routes */}
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />

      {/*  Auth Routes */}
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register/>} />
       {/* car routes */}
       <Route path ="/cars" element ={<Cars/>} />
       <Route path ="/cars/:id" element ={<CarDetails/>} />

       {/* user routes */}
       <Route path ="/profile" element ={<Profile/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
