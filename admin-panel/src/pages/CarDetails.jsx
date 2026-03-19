import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams,useLocation} from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
const CarDetails =() =>{
    const location = useLocation();
    const {id} = useParams();
    const[name,setName] = useState(location.state?.name);
    const[model,setModel] = useState(location.state?.model);
    const[year,setYear] = useState(location.state?.year);
    const[category,setCategory] = useState(location.state?.category);
    const[fuel,setFuel] = useState(location.state?.fuel);
    const[seats,setSeats] = useState(location.state?.seats);
    const[milage,setMilage] = useState(location.state?.milage);
    const[price,setPrice] = useState(location.state?.price);
    const[about,setAbout] = useState(location.state?.about);
    const[image,setImage] = useState("");
    const[transmission,setTransmission] = useState(location.state?.transmission);
    const navigation = useNavigate();

    const DeleteCar = async(e)=>{
        e.preventDefault();
        const token = localStorage.getItem("token");
        try{
          const res = await axios.delete(`${API}/api/v1/car/deletecar/${id}`,
            {
                headers :{
                    Authorization : `Bearer ${token}`
                }
            }
          );
          toast.success("Deleted successfully");
          navigation("/allcar")
        }catch(error){
            toast.error("Car not deleted");
            console.error("error in updating car",error);
        }

    }
    const handleEdit = async(e) =>{
         e.preventDefault();
        const token = localStorage.getItem("token");
        try{
          const res = await axios.patch(`${API}/api/v1/car/updatecar/${id}`,
            {
              name,
              model,
              year,
              category,
              fuel,
              seats,
              milage,
              price,
              about,
             transmission
          }
            ,{
            headers:{
            Authorization :`Bearer ${token}`,
        }
        });
          console.log(res);
          toast.success("Car Updated succesfully");
          navigation('/allcar');
          
        }catch(error){
            toast.error("Car not updated");
            console.error("error in updating car",error);
        }
    }
    return(
        <Layout>
            <div className="d-flex flex-column align-items-center" style={{minHeight:'80vh'}}>
                            <h1 className="mt-4 bg-dark text-light w-75 text-center">Edit car</h1>

                            <div className=""style={{width:'500px'}}>
                                <div className="mb-3">
                                    <label className="form-label">Car Name</label>
                                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Model</label>
                                    <input type="text" value={model} onChange={e=>setModel(e.target.value)} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Year</label>
                                    <input type="text" value={year} onChange={e=>setYear(e.target.value)} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Seats</label>
                                    <input type="text" value={seats} onChange={e=>setSeats(e.target.value)} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Milage</label>
                                    <input type="text" value={milage} onChange={e=>setMilage(e.target.value)} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input type="text" value={price} onChange={e=>setPrice(e.target.value)} className="form-control"/>
                                </div>
                                <div className="mb-b">
                                    <label htmlFor="" className="form-label">
                                      Transmission
                                    </label>
                                    <select className="form-select mb-3" value={transmission} onChange={e =>setTransmission(e.target.value)}>
                                        <option value={false}>Manual</option>
                                        <option value={true}>Automatic</option>
                                    </select>
                                </div>
                                 <div className="mb-b">
                                    <label htmlFor="" className="form-label">
                                      Fuel
                                    </label>
                                    <select className="form-select mb-3" value={fuel} onChange={e =>setFuel(e.target.value)}>
                                        <option value={'petrol'}>Petrol</option>
                                        <option value={'diesal'}>Diesal</option>
                                    </select>
                                </div>
                                <div className="mb-b">
                                    <label htmlFor="" className="form-label">
                                      Category
                                    </label>
                                    <select className="form-select mb-3" value={fuel} onChange={e =>setCategory(e.target.value)}>
                                        <option value={'hatchback'}>Hatchback</option>
                                        <option value={'sedan'}>Sedan</option>
                                    </select>
                                </div>
                                <div className="mb-b">
                                    <label htmlFor ="" className="form-label">About</label>
                                    <input type="text" value={about} onChange={e=>setAbout(e.target.value)} className="form-control"/>
                                </div>
                                <div className="m-3 d-flex ">
                                  <button className="btn btn-primary" onClick={handleEdit}> Update Car</button>
                                  <button className="btn btn-danger" onClick={DeleteCar}>Delete Car</button>
                                </div>
                                 
                            </div>
                        </div>
        </Layout>
    )
 }
export default CarDetails;
