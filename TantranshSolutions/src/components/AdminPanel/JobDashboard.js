import React, { useState, useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import "./AdminPanel.css"
import NavbarAdmin from './NavbarAdmin'
import axios from "axios"
import { MdDelete } from "react-icons/md";
import FileDownload from "js-file-download"

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
        <div className='AdminDashboard'>
            <LeftSidebar />
            <div className='HomeContainerAdmin'>
                <NavbarAdmin />
                <div className="listContainer">
                    <div className="listTitle">Job Application Form Details</div>
                    <table className="table">
                        <thead>
                            <tr>
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
                                        <td>{i.uid}</td>
                                        <td>{i.uname}</td>
                                        <td>{i.uemail}</td>
                                        <td>{i.ucontact}</td>
                                        <td>{i.uposition}</td>
                                        <td><button style={{border:"none", backgroundColor:"green", color:"white"}} onClick={()=>downloadFile(i.uid, i.uploadfiles)}>View</button></td>
                                        <td><button className='ml-2 bg-white' style={{ border: "none", color: "red" }} onClick={() => deleteJobPost(i.uid)}>{<MdDelete style={{ fontSize: "22px" }} />}</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default JobDashboard