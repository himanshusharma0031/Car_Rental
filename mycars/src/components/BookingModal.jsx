import React from 'react';
const BookingModal = (props) => {
    const {show,setShow,price,pickupDate,setPickupDate,returnDate,setReturnDate,handleBooking} = props;
    //total
    const calculateTotal =()=>{
        if(pickupDate && returnDate){
            const days = (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24);
            return days * price;
        }
    }
    return (
        <>
     <div className="modal d-flex" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-dark text-light">
        <h5 className="modal-title">Select Booking Dates</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setShow(false)} />
      </div>
      <div className="modal-body">
        <label htmlfor ="" className="form-label">Pickup Date</label>
        <input type="date" className="form-control mb-3"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)} />
        <label htmlfor ="" className="form-label">Return Date</label>
        <input type="date" className="form-control mb-3"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)} />
         <h4> Price: Rs{price}/- per day</h4>
            <h4>Total: Rs{calculateTotal()}/-</h4>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShow(false)}>Close</button>
        <button type="button" className="btn btn-primary" onClick={handleBooking}>Book</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
};

export default BookingModal;