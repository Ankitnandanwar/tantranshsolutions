
// import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";





const Applynow =() => {
    const [user, setuser] = useState('')
    const [email, setemail] = useState('')
    const [Mobilenumber, setmobilenumber] = useState('')
    const [position, setPosition] = useState('')
    const [message, setMessage] = useState('')
    const [uploadFiles, setUploadFiles] = useState('')


    const navigate = useNavigate()
    // const getdata = async()=>{
    // let data = await axios.get("http://localhost:6500/userdetails")
    // console.log(data)
    // }

    // useEffect(()=>{
    //   getdata()
    // },[])

    const upload = async()=>{
        try {
            const formData = new FormData();
            formData.append("file", uploadFiles)
            const res = await axios.post("http://localhost:6500/upload", formData)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    const handlesubmit = async() => {
        upload()
      
        let pattren = /^[A-Za-z./_@$#0123456789]{3,}@[A-Za-z].{1}[A-Za-z]{2,6}/
        // var number = /[0123456789]/
        if (user && email && Mobilenumber) {
            if (pattren.test(email) === true) {
                {
                    if (Mobilenumber.length === 10) {
                        {
                            let data = await axios.post("http://localhost:6500/userdetails",{
                                uname:user,
                                uemail:email,
                                ucontact:Mobilenumber,
                                uposition:position,
                                umessage:message,
                                // uploadfiles:uploadFiles
                            })
                            console.log(data)
                            console.log(user,email,Mobilenumber,position,message,uploadFiles)
                            navigate('/thanku')
                        }
                    }
                    else {
                        alert("Plase Enter Correct No")
                    }
                }
            }
            else {
                alert("Enter the valid email")
            }
        }
        else{
            alert("Fields can't be empty")
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
                            <select id="inputState" name="Position" required={true} onChange={(e) => setPosition(e.target.value)} className="form-control px-3 h-100 text-muted">
                                <option>Select Position</option>
                                <option>Android Developer</option>
                                <option>C# Developer</option>
                                <option>React Js Developer</option>
                                <option>Manual Tester</option>
                            </select>
                        </div>
                        <div className='Message m-3'>
                            <h5>Your Message</h5>
                            <textarea className="form-control" name="Message" required={true} type='text' onChange={(e) => setMessage(e.target.value)} placeholder='Your Message'/>
                        </div>
                        <div className="form-group m-3">
                            <h5 className="text-capitalize">upload your resume</h5>
                            <input type="file" name="Resume" required={true} onChange={(e) => setUploadFiles(e.target.files[0])} className="form-control-file" id="exampleFormControlFile1"/>
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