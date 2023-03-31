import React from 'react'
import LeftSidebar from './LeftSidebar'
import Mainbar from './Mainbar'
import "./AdminPanel.css"
import NavbarAdmin from './NavbarAdmin'

const AdminDashboard = () => {
  return (
    <div className='AdminDashboard'>
        <LeftSidebar/>
        <div className='HomeContainerAdmin'>
          <NavbarAdmin/>
          <Mainbar/>
        </div>
    </div>
  )
}

export default AdminDashboard