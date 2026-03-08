import React from "react";
const BookingDetailsModal =(props) =>{
    const {bookingDetailsModel,setBookingDetailsModel} = props;
    return(
     <>
     <div className="modal d-flex" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-dark text-light">
        <h5 className="modal-title">BOOKING DETAILS</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setBookingDetailsModel(false)} />
      </div>
      <div className="modal-body">
      <p> Journey Date: </p>
      <p> Return Date: </p>
       <p> Car Name: </p>
        <p> Total Price: </p>
        <p> Booking Status: </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setBookingDetailsModel(false)}>Close</button>
      </div>
    </div>
  </div>
</div>

        </>
)
}

export default BookingDetailsModal;