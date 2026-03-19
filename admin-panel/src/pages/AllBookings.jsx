import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import {Link} from  "react-router-dom";
const API = import.meta.env.VITE_API_URL;
const Allbookings =() =>{
    const [bookingDetails,setBookingDetails] = useState([]);
    useEffect(() =>{
       const fetchBookings = async() =>{
        try{
         const bookingss = await axios.get(`${API}/api/v1/booking/getallbookings`);
         console.log(bookingss.data.bookings);
         setBookingDetails(bookingss.data.bookings);
        }catch(error){
            toast.error("slow Internet connection");
            console.error("error found in fetching bookings");
        }
    }
    fetchBookings();
    },[]);
    return(
        <Layout>
            <div className="mt-3">
               <h4>All Bookings</h4>
               <table className ="table mt-3 text-center">
                <thead>
               <tr className ="bg-dark text-white">
                <th>Booking Id</th>
                <th>Journey Date</th>
                <th>Return Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Update</th>
               </tr>
               </thead>
               <tbody>
                {bookingDetails.map((bookings) => (
                <tr key ={bookings._id}>
                <td>{bookings._id}</td>   
                <td>{new Date(bookings.startDate).toLocaleDateString()}</td>
                <td>{new Date(bookings.returnDate).toLocaleDateString()}</td>
                <td>{bookings.totalPrice}</td>
                <td>{bookings.status}</td>
                <td> <Link to ={`/booking/${bookings._id}`}
                  state={{bookingId : bookings._id,name:bookings.user?.name,phone:bookings.user.phone,startDate:new Date(bookings.startDate).toLocaleDateString(),returnDate: new Date(bookings.returnDate).toLocaleDateString(),price:bookings.price,totalPrice:bookings.totalPrice,status:bookings.status,bookingtime:bookings.createdAt}}>
                    <i className="fa-solid fa-pen"></i>
                     </Link>
                </td>
                 </tr>
                  ))}
                  </tbody>
               </table>
             </div>
        </Layout>
    )
}
export default Allbookings;
