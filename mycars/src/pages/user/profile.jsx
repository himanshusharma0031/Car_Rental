import React,{useEffect, useState} from 'react';
import EditModal from '../../components/EditModal';
import axios from "axios";
import toast from 'react-hot-toast';
import './Profile.css';
const API = process.env.REACT_APP_API_URL;


const Profile = () =>{
    const [editModel ,setEditModel] = useState(false);
    const [bookingDetails,setBookingDetails] = useState([]);
    const[uname,setUname] = useState(localStorage.getItem("Name"));
    const[phone,setPhone] = useState(localStorage.getItem("Phone"));
    const[password,setPassword] = useState("");
    const Email = localStorage.getItem("Email");
    const id = localStorage.getItem("User");
    const [loading , setLoading] = useState(false);


    const handleUpdate =async()=>{
    const token = localStorage.getItem("token");
   try{
     const Updateduser = await axios.patch(`${API}/api/v1/user/update/${id}`,{
        name :uname,
        phone:phone
     },{
        headers:{
            Authorization :`Bearer ${token}`
        }
     });
     console.log(Updateduser);
     toast.success("User Updated successfully!");
          setEditModel(!editModel);

   }catch(error){
     console.error("Error updating user:", error);
   }

}
const deleteBooking = async(bookingId) =>{
     const token = localStorage.getItem("token");
    try{
       const deletedbooking = await axios.delete(`${API}/api/v1/booking/deletebooking/${bookingId}`,{
        headers :{
            Authorization :`Bearer ${token}`
        }
       });
       console.log(deletedbooking);
      setTimeout(() =>{fetchBookingDetails();},300);
     toast.success("booking deleted successfully!");
    }catch(error){
        console.log("Error Occurs:",error);
    }

}

 const fetchBookingDetails = async()=>{
            setLoading(true);
            const token = localStorage.getItem("token");
            try {
              const bookingInfo = await axios.get(`${API}/api/v1/booking/userbooking/${id}`,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
              );
               console.log(bookingInfo.data.booking);
                 if(bookingInfo.data){
                     setBookingDetails(bookingInfo.data.booking);
                 }
            } catch (error) {
                console.error("Error fetching booking details:", error);
            } finally {
                setLoading(false);
            }
        };
         useEffect(()=>{
        fetchBookingDetails();
         },[]);
    return (
        <>
            <div className = "container" style={{minHeight:"70vh"}}>
              <div className ="mt-5">
              <p>Name: {uname}</p>
              <p>Email:{Email}</p>
              <p>Phone:{phone}</p>
              <button className ="btn btn-warning" onClick ={() => setEditModel(!editModel)}>Edit details</button>
              </div>
              <div className="mt-3">
               <h4> Your Bookings</h4>
               <table className ="table mt-3 text-center">
               <tr className ="bg-dark text-white">
                <th>Booking Id</th>
                <th>Journey Date</th>
                <th>Return Date</th>
                <th>Status</th>
                <th>Booking deletion</th>
               </tr>
                {bookingDetails.map((bookings) => (
                <tr key ={bookings._id}>
               <td>{bookings._id}</td>
                <td>{new Date(bookings.startDate).toLocaleDateString()}</td>
                <td>{new Date(bookings.returnDate).toLocaleDateString()}</td>
                <td>{bookings.status}</td>
                <td>{<button className ="btn btn-warning" onClick ={() => deleteBooking(bookings._id)}>Delete</button>}</td>
                 </tr>
          ))}
               </table>
               </div>
            </div>

            {/* editmodal */}
            {editModel && <EditModal
             editModel = {editModel} 
            setEditModel ={setEditModel}
              uname ={uname}
             setUname ={setUname}
            phone ={phone}
             setPhone ={setPhone}
            handleUpdate={handleUpdate}
            />}
        </>
    )
}

export default Profile;