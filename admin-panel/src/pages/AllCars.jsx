import React from "react";
import Layout from "../components/Layout";
import { useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
const AllCar =() =>{
    const [carData,setCarData]=useState([]);
      useEffect(() =>{
          const fetchCarData = async () => {
            try{
              const res = await axios.get(`${API}/api/v1/car/getallcars`);
              console.log(res);
              console.log(res.data);
              console.log(res.data.cars);
              setCarData(res.data.cars);
            }catch(error){
              console.error("error occour in founding car details",error)
            }
          };
          fetchCarData();
      },[]);
    return(
        <Layout>
            <div className="mt-3">
                <h1>All Cars</h1>
                <table className="table">
                 <thead>
                    <tr>
                        <th scope="col">Car</th>
                        <th scope="col">Car Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Category</th>
                        <th scope="col">Seats</th>
                        <th scope="col">Fuel</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                    </tr>
                 </thead>
                 <tbody>
                    {carData.map((car) => (
                      <tr key = {car._id}>
                       <td><img src={`data:image/png;base64,${car?.image}`} alt={car.name} height={100} width={100}/></td>
                       <td>{car.name}</td>
                       <td>{car.model}</td>
                       <td>{car.year}</td>
                       <td>{car.category}</td>
                       <td>{car.seats}</td>
                       <td>{car.fuel}</td>
                       <td>{car.milage}</td>
                       <td>{car.transmission?"Automatic":"Manual"}</td>
                       <td>{car.price}</td>
                       <td>{car.status?'Available':'Not Available'}</td>
                       <td>
                        <Link to ={`/car/${car._id}`}
                         state ={{name:car.name,model:car.model,year:car.year,category:car.category,seats:car.seats,fuel:car.fuel,milage:car.milage,transmission:car.transmission,price:car.price,status:car.status,about:car.about}}>
                       <i className="fa-solid fa-pen"></i>
                        </Link></td>
                    </tr>
                    ))}
                 </tbody>
                </table>
            </div>
        </Layout>
    )
}
export default AllCar;
