import React,{useState} from 'react';
import EditModal from '../../components/EditModal';
import BookingDetailsModal from '../../components/BookingDetailsModal';

const Profile = () =>{
    const [editModel ,setEditModel] = useState(false);
    const [bookingDetailsModel,setBookingDetailsModel] = useState(false);
    return (
        <>
            <div className = "container" style={{minHeight:"70vh"}}>
              <div className ="mt-5">
              <p>Name: Your Name</p>
              <p>Email:Your Email</p>
              <p>Phone:Your Phone</p>
              <button className ="btn btn-warning" onClick ={() => setEditModel(!editModel)}>Edit details</button>
              </div>
              <div className="mt-3">
               <h4> Your Bookings</h4>
               <table className ="table mt-3 text-center">
               <tr className ="bg-dark text-white">
                <th>Car Name</th>
                <th>Journey Date</th>
                <th>Status</th>
                <th>View Details</th>
               </tr>
               <tr>
                <td>Scorpio n</td>
                <td>2-2-2026</td>
                <td>confirmed</td>
                <td><i className="fas fa-eye text-primary" style={{cursor: "pointer"}} onClick ={() => setBookingDetailsModel(!bookingDetailsModel)}></i></td>
               </tr>
               </table>
               </div>
            </div>

            {/* editmodal */}
            {editModel && <EditModal editModel = {editModel} setEditModel ={setEditModel}/>}
            {/* booking details modal */}
            {bookingDetailsModel && <BookingDetailsModal bookingDetailsModel = {bookingDetailsModel} setBookingDetailsModel ={setBookingDetailsModel}/>}
        </>
    )
}

export default Profile;