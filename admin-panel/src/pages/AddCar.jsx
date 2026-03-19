import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate} from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
const AddCar =() =>{
    const[name,setName] = useState("");
    const[model,setModel] = useState("top");
    const[year,setYear] = useState(2025);
    const[category,setCategory] = useState("hatchback");
    const[fuel,setFuel] = useState("petrol");
    const[seats,setSeats] = useState(5);
    const[milage,setMilage] = useState(14);
    const[price,setPrice] = useState(1000);
    const[about,setAbout] = useState("");
    const[image,setImage] = useState("");
    const[transmission,setTransmission] = useState(false);
    const navigation = useNavigate();

    const handleAdd = async(e) =>{
         e.preventDefault();
        const formData = new FormData();
        formData.append('image',image);
        formData.append('name',name);
        formData.append('model',model);
        formData.append('year',year);
        formData.append('category',category);
        formData.append('fuel',fuel);
        formData.append('seats',seats);
        formData.append('milage',milage);
        formData.append('price',price);
        formData.append('about',about);
        formData.append('transmission',transmission);
        const token = localStorage.getItem("token");
        try{
          const res = await axios.post(`${API}/api/v1/car/addcar`,
            formData,{
            headers:{
            Authorization :`Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
        });
          console.log(res);
          toast.success("Car added succesfully");
          navigation('/allcar');
          
        }catch(error){
            console.error("error in adding car",error);
        }
    }
    return(
        <Layout>
            <div className="d-flex flex-column align-items-center" style={{minHeight:'80vh'}}>
                            <h1 className="mt-4 bg-dark text-light w-75 text-center">Add car</h1>

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
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Image</label>
                                    <input type="file" accept="image/" onChange={e=>setImage(e.target.files[0])} className="form-control"/>
                                </div>
                                <div className="m-3">
                                  <button className="btn btn-primary" onClick={handleAdd}> Add Car</button>
                                </div>
                            </div>
                        </div>
        </Layout>
    )
}
export default AddCar;

