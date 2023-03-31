
// import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSearchParams } from 'react-router-dom'






const Applynow =() => {
    const [user, setuser] = useState("")
    const [email, setemail] = useState("")
    const [Mobilenumber, setmobilenumber] = useState("")
    const [position, setPosition] = useState("")
    const [message, setMessage] = useState("")
    const [uploadFiles, setUploadFiles] = useState("")


    const navigate = useNavigate()
    const [searchparams] = useSearchParams();

        
    
    
    const handlesubmit = async() => {
        let formData =  new FormData()
        formData.append("file",uploadFiles)
        formData.append("Username",user)
        formData.append("Email",email)
        formData.append("Phone",Mobilenumber)
        formData.append("Position", searchparams.get("postData"))
        formData.append("Message",message)

        const config ={
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
        const res = await axios.post("http://localhost:6500/userdetails", formData, config)
        console.log(res)
        console.log(res.data)
        
        if(res.data.status===201){
            navigate("/thanku")
        }else{
            alert("Please fill all the details to continue")
        }

    }
   
    
    return (
        <div className="container mt-5 mb-5 p-3">
            <div className='row justify-content-center pb-5'>
                <div className='col-12 col-lg-6 signin-form shadow-lg p-4 rounded container mt-5 bg-light' >
                    <h2 className="text-center" style={{color:"#034694"}}>Apply For Job</h2>
                 
                    <div className="m-3">
                        <h5> Your Name <span className="text-danger small">*</span></h5>
                        <input className="form-control"  type='text' required={true} onChange={(e) => setuser(e.target.value)} placeholder='Enter username' name='Username'></input>
                    </div>

                    <div className="m-3">
                        <h5> Your Email <span className="bg-light text-danger small">*</span></h5>
                        <input className="form-control" type='email' required={true} onChange={(e) => setemail(e.target.value)} placeholder='Enter Email' name='Email'></input>
                    </div>

                    <div className="m-3">
                        <h5>Contact Number <span className="bg-light text-danger small">*</span></h5>
                        <input className="form-control" type='text' required={true} onChange={(e) => setmobilenumber(e.target.value)} placeholder='Enter Number' name='Phone'></input>
                    </div>

                    <div className="m-3">
                        <h5>Position</h5>
                        <input className="form-control" value={searchparams.get("postData")} disabled name="Position" type='text' required={true} onChange={(e) => setPosition(e.target.value)} ></input>
                    </div>

                    <div className='Message m-3'>
                        <h5>Your Message</h5>
                        <textarea className="form-control" name="Message" required={true} type='text' onChange={(e) => setMessage(e.target.value)} placeholder='Your Message'/>
                    </div>

                    <div className="form-group m-3">
                        <h5 className="text-capitalize">upload your resume</h5>
                        <input type="file" name="file" required={true} onChange={(e) => setUploadFiles(e.target.files[0])} className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                    
                    <div className='text-center m-3'>
                        <button className="btn text-white" style={{backgroundColor:"#034694"}} onClick={() => handlesubmit()}>Submit</button>
                    </div>
                    
                </div>
            </div>

        </div>

    )

}


export default Applynow;