import React from 'react'
import './Navbar.css'
import logo from '../../Assets/keshri daily needs logo.jpg'
import navprofileIcon from '../../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='nav-logo' alt="" />
      <h3>KESHRI DAILY NEEDS</h3>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
