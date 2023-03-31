import React,{useState} from 'react'
import "./Pages.css"
import { useNavigate } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import axios from 'axios';

const AdminLogin = () => {


    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:6500/adminlogin", {name, password})
        .then(data=>{
            if(data.data.status===200){
                Navigate("/admin-dashboard")
            }else{
                alert("Enter correct username and password")
            }
        }).catch(err => console.log(err))
        
        
                
    }
  return (
    <div className='container-fluid bg-light'>
        <div className='d-flex justify-content-center flex-column align-items-center' style={{ height:"100vh"}}>
            
            <form onSubmit={handleSubmit} className='p-4 bg-white d-flex flex-column align-items-center box-shadow' style={{borderRadius:"15px", width:"360px"}}>
                <div className="form-row d-flex flex-column align-items-center">
                    <div className='login-panel-icon'><FaRegUser className='user-icon'/></div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control bg-light" id="inputusername" placeholder="Username" onChange={e=>{setName(e.target.value)}}/>
                    </div>
                        
                    <div className="form-group mt-3">
                        <input type="password" className="form-control bg-light" id="inputPassword4" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                </div>       
                
                <div className='mt-3'>
                    <button type="submit" className="btn text-white" style={{backgroundColor:"#034694"}}>Log In</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin