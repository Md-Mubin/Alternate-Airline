import React from 'react'
import './Navbar.css'
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar'

const Navbar = () => {
  return (
    <>
      <nav className='mainNav'>
        <div className="container">
          <div className="navRow">
            <div className="navHead">
              <img src="images/logo.jpg" alt="logo_image" />
              <ul className="navItems">
                <li>Book flights</li>
                <li>Information</li>
                <li>Help</li>
                <li>Travel Agents</li>
              </ul>
            </div>
            <button>Manage booking</button>
          </div>
        </div>
      </nav>
      <ResponsiveNavbar/>
    </>
  )
}

export default Navbar