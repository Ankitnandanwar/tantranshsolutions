import React, { useState, useEffect } from 'react'
import "../AdminPanel.css"
import axios from "axios"
import FileDownload from "js-file-download"
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import "./JobDashboard.css"

const JobDashboard = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:6500/userdetails').then((res) => {
            setData(res.data)
            // console.log(datas)
        })
    }, [])

    const deleteJobPost = async (uid) => {

        if (window.confirm("Are you sure you want to delete this post ?") === true) {
            axios.delete(`http://localhost:6500/userdetails/${uid}`)
            window.location.reload()
        }

    }

    const downloadFile = async (uid, uploadfiles) =>{
        const data = await axios.get(`http://localhost:6500/userdetails/${uid}`).then((req,res)=>{
            window.open(`http://localhost:6500/uploads/${uploadfiles}`)
            // FileDownload(`http://localhost:6500/uploads/${uploadfiles}`, "file.pdf")
        })
    }


    return (
            <div>
                <AdminNavbar />
                <div className="container mt-5" >
                    <div className="listTitle text-primary"><h4>Job Application Form Details</h4></div>
                    <table className="table table-striped" style={{border:"1px solid lightgray"}}>
                        <thead>
                            <tr style={{backgroundColor:"#34577e", color:"white"}}>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Position Applied</th>
                                <th scope="col">Resume</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datas.map((i) => (
                                    <tr>
                                        <td className='text-muted'>{i.uid}</td>
                                        <td className='text-muted'>{i.uname}</td>
                                        <td className='text-muted'>{i.uemail}</td>
                                        <td className='text-muted'>{i.ucontact}</td>
                                        <td className='text-muted'>{i.uposition}</td>
                                        <td><button className='ml-2' style={{border:"none", padding:"2px 8px",letterSpacing:"0.7px",borderRadius:"5px", backgroundColor:"#32CD32", color:"white"}} onClick={()=>downloadFile(i.uid, i.uploadfiles)}>View</button></td>
                                        <td><button className='' style={{ border:"none", padding:"2px 8px",letterSpacing:"0.7px",borderRadius:"5px", backgroundColor:"red", color:"white" }} onClick={() => deleteJobPost(i.uid)}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default JobDashboard