import React from 'react'
import { GoSearch } from "react-icons/go";
import { MdLanguage } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";

const NavbarAdmin = () => {
  return (
    <div className='admin-nav'>
        <div className="wrapper-admin">
            <div className="search-admin">
                <input type="text" placeholder='Search....'/>
                <GoSearch/>
            </div>
            <div className='items-admin'>
                <div className="item-admin">
                    <MdLanguage/>
                    English
                </div>
                <div className="item-admin">
                    <BsChat/>
                </div>
                <div className="item-admin">
                    <IoIosNotificationsOutline/>
                </div>
                <div className="item-admin">
                    <BsListUl/>
                </div>
                <div className="item-admin">
                    <BsListUl/>
                </div>
                <div className="item-admin">
                    <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg" alt="avatar" className='avatar'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NavbarAdmin