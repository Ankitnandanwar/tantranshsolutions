import React from "react";
import { Link } from "react-router-dom";

function Thankupage(){

   return( 
    <div className="d-flex justify-content-center align-items-center flex-column mt-5 ">
        {/* <h1> Thanku!</h1> */}
        <img width={"300px"} src="https://cdn.dribbble.com/users/1283437/screenshots/4486866/media/10a223216f809e9275308f98fe2e56cd.gif" alt="thank-you"/>
        <p> Application Submitted Successfully.</p>

        {/* <span ><Link to="/">Go Back</Link></span> */}
        <Link to="/"><button type="button" className="btn btn-primary">OK</button></Link>
    </div>)
}


export default Thankupage;