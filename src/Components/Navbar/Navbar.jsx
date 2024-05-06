import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/adminlogoblack.svg'
import navProfile from '../../assets/navprofil.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo' />
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar