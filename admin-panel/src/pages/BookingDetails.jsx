import React, { useState } from "react";
import Layout from "../components/Layout";
import { useLocation, useParams,useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
const Bookingdetails=() =>{
    const {id} = useParams();
    console.log(id);
    const location = useLocation();
    const navigation = useNavigate();
    const[status,setStatus] = useState(location.state.status);
    const UpdateStatus = async(e) =>{
        e.preventDefault();
        const token = localStorage.getItem("token");
            console.log(token);
        try{
            const res = await axios.patch(`${API}/api/v1/booking/updatestatus/${id}`,
                {
                    status:status
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );
            console.log(res);
            toast.success("status updated successfully");
            navigation('/bookings')

        }catch(error){
            console.error("error occour in status update API",error);
            toast.error("Status Not Updated");
        }
          
    }
    return(
        <Layout>
            <div style={{textAlign:"center",marginTop:"20px"}}>
                <h1>Booking Details</h1>
                <h4>Booking ID : {location.state.bookingId}</h4>
                <h4>Customer Name : {location.state.name}</h4>
                <h4>Phone : {location.state.phone}</h4>
                <h4>Pickup Date : {location.state.startDate}</h4>
                <h4>return Date : {location.state.returnDate}</h4>
                <h4>Price : {location.state.price}</h4>
                <h4>Total price : {location.state.totalPrice}</h4>
                <h4>Status : {location.state.status}</h4>
                <label htmlFor="status-select"><h4>Status</h4></label>
                <select
                id="status-select"
                value={status}
                onChange={(e)=>setStatus(e.target.value)}
                style={{padding:'5px 10px'}}>
                    <option value="pending">Pending</option>
                    <option value="confirm">Confirm</option>
                    <option value="cancel">Cancel</option>
                </select>
            </div>  
            <div className="d-flex justify-content-center mt-3">
               <button className="btn btn-primary" onClick={UpdateStatus}>
                    Update Status
                </button> 
            </div>  
                
            
        </Layout>
    )
}
export default Bookingdetails;
