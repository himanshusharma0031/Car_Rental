import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CarsData from '../../Data/carsData.json';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import BookingModal from '../../components/BookingModal';
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


const CarDetails = () => {
    const user = true;
    const { id } = useParams();
    console.log(id);
    const [CarDetails,setCarDetails] = useState(""); 
    const [loading , setLoading] = useState(false);

    const [show,setShow] = useState(false);
    const [startDate,setstartDate] = useState(new Date().toISOString().split("T")[0]);
    const [returnDate,setReturnDate] = useState(new Date().toISOString().split("T")[0]);
    const[Totalprice,setTotalPrice] = useState();
    const Userid = localStorage.getItem("User");
    console.log(Userid);
    const pp = CarDetails.price;
    console.log(pp);
    console.log(Totalprice);
    console.log(startDate);
    console.log(returnDate);
    //booking function
    const handleBooking = async () => {
        const token = localStorage.getItem("token");
        try {
            const booking = await axios.post(`${API}/api/v1/booking/createbooking`,{
                user:Userid,
               car: id,
                price:pp,
                totalPrice:Totalprice,
                returnDate,
               startDate 
            },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
            toast.success("Car booked successfully!");
            setShow(false);
        } catch (error) {
            toast.error("please login first or Enter correct date");
            console.error("Error booking car:", error);
        }
    };
    useEffect(()=>{
        const fetchCarDetails = async()=>{
            setLoading(true);
            try {
              //  const carInfo = CarsData.find(car => car.id === parseInt(id));
              const carInfo = await axios.get(`${API}/api/v1/car/getcar/${id}`);
                if(carInfo.data){
                    console.log("Car Info:", carInfo.data.car);
                    setCarDetails(carInfo.data.car);
                }
            } catch (error) {
                console.error("Error fetching car details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCarDetails();
    },[id]);
    console.log("cardetails",CarDetails);
    return (
     <>
     {loading?<h2 className ="text-center">Loading...</h2>:(
            <>
                <div className="row my-4" style ={{minHeight: "50vh"}}>
                    <div className="col-md-6">
                        <img src={`data:image/png;base64,${CarDetails?.image}`} alt={CarDetails.name} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{CarDetails.name}</h2>
                        <p>{CarDetails.about}</p>
                        <table className="table">
                            <tbody>
                            <tr>
                                <th scope='row'>Model</th>
                                <td>{CarDetails.model}</td>
                             </tr>   
                            <tr>
                                <th scope='row'>Year</th>
                                <td>{CarDetails.year}</td>
                            </tr>
                            <tr>    
                                <th scope='row'>Seats</th>
                                <td>{CarDetails.seats}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Fuel</th>
                                <td>{CarDetails.fuel}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Milage</th>
                                <td>{CarDetails.milage}</td>
                            </tr>    
                            <tr>
                                <th scope='row'>Transmission</th>
                                <td>{CarDetails?.transmission?"Automatic":"Manual"}</td>
                            </tr>

                            
                            </tbody>
                        </table>
                        <h4>Price:Rs{CarDetails.price}/- per day</h4>
                        {!user ?(
                            <Link to ={"/login"} className ="btn btn-warning mb-3 mt-2">
                            Please login to book this car
                            </Link>
                        ):(<button className="btn btn-primary mb-3 mt-2" onClick={() => setShow(!show)}>Book Now</button>)}
                    </div>
                </div>
                {show && <BookingModal
                    show ={show}
                    setShow={setShow}
                    price ={CarDetails?.price}
                    startDate ={startDate}
                    setstartDate ={setstartDate}
                    returnDate ={returnDate}
                    setReturnDate ={setReturnDate}
                    handleBooking={handleBooking}
                    Totalprice={Totalprice}
                    setTotalPrice={setTotalPrice}
                />}
            </>
        )}
     </>
    )
};
export default CarDetails;