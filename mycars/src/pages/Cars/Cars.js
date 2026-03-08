import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
//import CarData from '../../Data/carsData.json';
import CarCard from '../../components/CarCard';
const Cars =  () => {
  const [carData,setCarData]=useState([]);
  useEffect(() =>{
      const fetchCarData = async () => {
        try{
          const res = await axios.get("http://localhost:8000/api/v1/car/getallcars");
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
  //console.log("CarData", CarData);
  return (
    <>
      <div style={{minHeight: "80vh"}}>
        <h1 className="text-center mb-1" > Explore our Cars</h1>
        <h3 className="text-center mb-1">click on a car to view details</h3>
        <div className="d-flex justify-content-center align-items-center">
          {carData.map((car) => (
             <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div> 
    </>
  );
};

export default Cars;
