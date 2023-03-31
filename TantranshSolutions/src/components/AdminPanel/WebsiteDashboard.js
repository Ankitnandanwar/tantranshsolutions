import React from 'react'
import LeftSidebar from './LeftSidebar'
import "./AdminPanel.css"
import NavbarAdmin from './NavbarAdmin'

const WebsiteDashboard = () => {
  return (
    <div className='AdminDashboard'>
        <LeftSidebar/>
        <div className='HomeContainerAdmin'>
          <NavbarAdmin/>
          Website Dashboard
        </div>
    </div>
  )
}

export default WebsiteDashboard