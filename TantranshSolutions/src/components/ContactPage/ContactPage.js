import React from 'react'
import { FcFeedback } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

const ContactPage = () => {

    return (
    <div className='container mt-5 mb-5 p-3'>
        <div className='pb-3'>
            <div className='bg-light shadow-lg rounded pt-5 mt-5 pb-5'>
                <h1 className='text-capitalize text-center' style={{color:"#034694"}}>get in touch</h1>
                <p className='text-center text-muted mt-3'>Tantransh Solutions is providing best IT services. We are an IT partner to your Business.</p>
                <form action='https://formspree.io/f/xyyapeod' method='POST' className='container pl-0 pl-sm-5 pr-0 pr-sm-5 pt-4'>
                    <div className="form-row pl-0 pl-sm-5 pr-0 pr-sm-5">
                        <div className="form-group col-xl-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3 ">
                            <input type="text" name='username' required className="form-control px-3 p-2" placeholder="Enter Name" autoComplete='off'/>
                        </div>
                        <div className="form-group col-xl-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3">
                            <input type="email" name='email' required className="form-control px-3 p-2" placeholder="Enter Email" autoComplete='off'/>
                        </div>
                        <div className="form-group col-xl-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3">
                            <input type="number" name='phone' required className="form-control px-3 p-2" placeholder="Enter Phone" autoComplete='off'/>
                        </div>
                        <div class="form-group col-md-6 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3">
                            <select id="inputState" name='product' required className="form-control px-3 h-100 text-muted">
                                <option selected>Select Product</option>
                                <option>Web Design & Development</option>
                                <option>Software Development</option>
                                <option>Web Development</option>
                                <option>App Development</option>
                            </select>
                        </div>
                        <div className="form-group col-xl-12 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3">
                            <textarea type="text" name='message' required className="form-control px-3 pb-5" placeholder="Enter Message" autoComplete='off'/>
                        </div>
                        <div className="form-group col-xl-12 pt-3 pt-sm-0 pl-3 pl-sm-0 pr-3 pr-sm-0 pl-xl-3 pr-xl-3 pt-xl-3 d-flex justify-content-center">
                            <button type="submit" className="btn p-2 text-white" style={{ backgroundColor:" #4CBB17", fontWeight:"500"}}>Submit Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        {/* Embedded map and Location */}
        <div className='mt-4'>
            <div className='row'>
                <div className='col-12 col-lg-8 col-xl-8 col-md-6'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6367472984352!2d79.05812551476505!3d21.1270435859452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf78ff77e4e3%3A0xb288a7cd22893b24!2sTantransh%20Solution!5e0!3m2!1sen!2sin!4v1677749633234!5m2!1sen!2sin" width="100%" height="380" style={{ border:0, padding:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>   
                </div>

                <div className='col-12 col-lg-4 col-xl-4 col-md-6 bg-light p-4'>
                    <div className='text-center'>
                        <h2 style={{color:"#034694"}}>Location</h2>
                    </div>
                    <div className='d-flex mt-4' style={{gap:"1.2rem"}}>
                        <div>
                            <FcFeedback style={{fontSize:"35px"}}/>
                        </div>
                        <div className='mt-2' style={{lineHeight:"13px"}}>
                            <p style={{fontSize:"20px", color:"#4CBB17"}} className='font-weight-bold'>Email</p>
                            <p className='text-muted'>hrd@tantranshsolutions.com</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4' style={{gap:"1.2rem"}}>
                        <div>
                            <FcPhone style={{fontSize:"35px"}}/>
                        </div>
                        <div className='mt-2' style={{ lineHeight:"13px"}}>
                            <p style={{fontSize:"20px", color:"#4CBB17"}} className='font-weight-bold'>Phone No</p>
                            <p className='text-muted'>+91 8799983741 / 9890282949</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4' style={{gap:"1.2rem"}}>
                        <div>
                            <FcHome style={{fontSize:"35px"}}/>
                        </div>
                        <div >
                            <p style={{fontSize:"20px", color:"#4CBB17"}} className='font-weight-bold'>Address</p>
                            <p className='text-muted'>Plot no 194, Kasturba Bhavan, Abhyankar Nagar Rd, opp. Ashish Tower, Bajaj Nagar, Nagpur, Maharashtra 440010.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage