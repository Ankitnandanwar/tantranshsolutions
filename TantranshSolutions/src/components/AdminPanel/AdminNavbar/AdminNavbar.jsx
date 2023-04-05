import React from 'react'
import './AdminNavbar.css'
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import { SiTestcafe } from "react-icons/si";
import { ImUserTie } from "react-icons/im";
import { FaSuitcase } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <>
        <header>
            <div className='admincontainer'>
                <div>
                    <Link to="/admin-dashboard" style={{textDecoration:"none", color:"white"}}><h2>Dashboard</h2></Link>
                </div>
                <nav className='adminnav'>
                    <ul>
                        <Link to="/admin-dashboard" style={{textDecoration:"none", color:"white"}}><li><CgProfile style={{fontSize:"21px"}}/> Profile</li></Link>
                        <li><SlSettings style={{fontSize:"21px"}}/> Development
                            <div className='admindropdown'> 
                                <li>Android Development</li>
                                <li>Web Development</li>
                                <li>IOS Development</li>
                            </div>
                        </li>
                        <li><SiTestcafe style={{fontSize:"21px"}}/> Testing
                            <div className='admindropdown'> 
                                <li>Manual Testing</li>
                                <li>Automation Testing</li>
                            </div>
                        </li>
                        <li><ImUserTie style={{fontSize:"21px"}}/> Employee Details
                            <div className='admindropdown'> 
                                <li>Current Employees</li>
                                <li>Add New Employee</li>
                                <li>Ex Employee</li>
                            </div>
                        </li>
                        <li><FaSuitcase style={{fontSize:"21px"}}/> Job Details
                            <div className='admindropdown'> 
                                <Link to="/view-jobpost-dashboard" style={{textDecoration:"none"}}><li>View All Hiring Post</li></Link>
                                <Link to="/job-dashboard" style={{textDecoration:"none"}}><li> Job Application Details</li></Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default AdminNavbar