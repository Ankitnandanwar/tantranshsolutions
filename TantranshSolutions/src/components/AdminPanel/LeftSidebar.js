import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div className='leftsidebar'>
      <div className="top">
        <Link to="/admin-dashboard" className='logo'>Dashboard</Link>
      </div>
      <hr className='hr-left'/>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li className='left-side-li'><Link to="/admin-dashboard" className='left-span'>Profile</Link></li>
          <p className="title">Department</p>
          <li className='left-side-li'>
            <Link className='left-span'>Development
              <div className='drop-leftsidebar'>
              <ul>
                <li>Android Development</li>
                <li>Web Development</li>
                <li>IOS Development</li>
              </ul>
              </div>
            </Link>
          </li>
          <li className='left-side-li'>
            <Link className='left-span'>Testing
              <div className='drop-leftsidebar'>
              <ul>
                <li>Manual Testing</li>
                <li>Automation Testing</li>
              </ul>
              </div>
            </Link>
          </li>
          <p className="title">Employee Details</p>
          <li className='left-side-li'>
            {/* <CgWebsite className='icon-color'/> */}
            <Link className='left-span'>Employee
              <div className='drop-leftsidebar'>
              <ul>
                <li>Add Employee</li>
                <li>Remove Employee</li>
                <li>Ex-Employee</li>
              </ul>
              </div>
            </Link>
          </li>
          <p className="title">Job Details</p>
          <li className='left-side-li'>
            {/* <CgWebsite className='icon-color'/> */}
            <Link className='left-span'>Job
              <div className='drop-leftsidebar'>
              <ul>
                <li><Link to="/view-jobpost-dashboard" style={{textDecoration:"none", color:"#888"}}>View All Hiring Post</Link></li>
                <li><Link to="/job-dashboard" style={{textDecoration:"none", color:"#888"}}>Job Application Details</Link></li>
              </ul>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftSidebar