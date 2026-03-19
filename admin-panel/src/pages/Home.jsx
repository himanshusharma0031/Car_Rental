import React from "react";
import Layout from "../components/Layout";
import './Home.css';
const Home =() =>{
    return(
        <Layout>
            <div className="menu1 d-flex flex-column align-items-center justify-content-center" style={{minHeight:'100vh'}}>
           <h4> Car Rental App</h4>
           <h1>Welcome Admin</h1>
           <p>for any assistance please call the developer</p>
           <p><i className="fa-solid fa-phone"></i> :+919671778859</p>
           <p>Design & Develop By Himanshu Sharma</p>
            </div>
        </Layout>
    )
}

export default Home;