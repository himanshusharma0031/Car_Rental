import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/auth/Login.jsx';
import AddCar from './pages/AddCar.jsx';
import {Toaster} from "react-hot-toast";
import './App.css';
import CarDetails from './pages/CarDetails.jsx';
import AllCar from './pages/AllCars.jsx';
import Allbookings from './pages/AllBookings.jsx';
import Bookingdetails from './pages/BookingDetails.jsx';
import EditCar from './pages/EditCar.jsx';

function App() {

  return (
    <>
    <Toaster/>
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/' element = {<Login/>}/>
        <Route path='/addcar' element = {<AddCar/>}/>
        <Route path='/allcar' element = {<AllCar/>}/>
        <Route path='/car/:id' element = {<CarDetails/>}/>
        <Route path='/bookings' element = {<Allbookings/>}/>
        <Route path='/booking/:id' element = {<Bookingdetails/>}/>
        <Route path='/editcar/:id' element ={<EditCar/>}/>
      </Routes>
    </>
  )
}

export default App;
