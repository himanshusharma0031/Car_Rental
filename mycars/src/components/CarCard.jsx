import React from "react";
import {Link} from "react-router"
 const CarCard =({car})=>{
    console.log(car);
    console.log(car._id);
    console.log(car.name);
    return(
       <>
       <Link to={`/cars/${car._id}`} style={{ textDecoration: 'none' }}>
          <div className="card m-2" style={{ width: '18rem', cursor: 'pointer' }}>
            <img src={`data:image/png;base64,${car?.image}`} className="card-img-top" alt={car.name} />
            <div className="card-body">
              <h5 className="card-title">{car?.name}</h5>
              <p className="card-text">{car?.about?.substring(0, 50)}...</p>
            </div>
          </div>
       </Link>
       </>
    )
 }
 export default CarCard;