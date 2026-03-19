import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
const Menus=()=>{
    const Navigate = useNavigate();
    const handlelogout =() =>{
        localStorage.clear();
        Navigate('/');
        toast.success("Logout successfully");
    }
    return(
       <>
       <div className="menu d-flex flex-column align-items-center justify-content-center mt-4">
        <p>Admin panel</p>
        <Link to ='/home'><i className="fa-solid fa-home"></i>Home</Link>
        <Link to ='/allcar'><i className="fa-solid fa-car"></i>All Cars</Link>
        <Link to ='/addcar'><i className="fa-solid fa-plus"></i>Add Car</Link>
        <Link to ='/bookings'><i className="fa-solid fa-list"></i>Bookings</Link>
        <button className="btn btn-danger" onClick={handlelogout}>LOGOUT</button>
       </div>
       </>
    )
}
export default Menus;