import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'

import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";




const Footer = () => {
  return (
    <section>
      {/* footer section */}
      <footer className='container-fluid' style={{backgroundColor:"#034694"}}>
        <div className='row d-flex justify-content-center pt-4' style={{gap:"2rem"}}>
          <div className='col-12 col-xl-2 col-lg-2 col-md-4 text-white'>
            <div>
              <p>Tantransh Solutions</p>
            </div>
            <div>
              <p className='small'>Plot no 194, Kasturba Bhavan, Abhyankar Nagar Rd, opp. Ashish Tower, Bajaj Nagar, Nagpur, Maharashtra 440010.</p>
            </div>
          </div>
          <div className='col-12 col-xl-2 col-lg-2 col-md-4 text-white'>
            <div>
              <p>Follow Us</p>
            </div>
            <div className='d-flex' style={{gap:"1rem", fontSize:"25px"}}>
              <div className='icons'><CiFacebook/></div>
              <div className='icons'><CiInstagram/></div>
              <div className='icons'><CiLinkedin/></div>
              <div className='icons'><CiTwitter/></div>
            </div>
          </div>
          <div className='col-12 col-xl-2 col-lg-2 col-md-4 text-white'>
            <div>
              <p>Reach Out</p>
            </div>
            <div>
              <p className='small' style={{letterSpacing:"1px"}}>+91 8799983741 / 9890282949</p>
              <p className='small'>hrd@tantranshsolutions.com</p>
            </div>
          </div>
        </div>
        {/* footer 2nd part */}
        <hr style={{color:"white"}} />
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-xl-6 col-lg-6 d-flex justify-content-center'>
              <div><p className='text-white small'>@ {new Date().getFullYear()} Tantransh Solutions. All Rights Reserved</p></div>
            </div>
            {/* <div className='col-12 col-md-6 col-xl-6 col-lg-6 text-white text-uppercase d-flex justify-content-center' style={{cursor:"pointer"}}>
              <div className='text-center pb-1'><p>privacy policy <br />terms & conditions</p></div>
            </div> */}
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer