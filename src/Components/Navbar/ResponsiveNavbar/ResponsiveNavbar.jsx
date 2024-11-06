import React, { useState } from "react";
import "./ResponsiveNavbar.css";
import { FaArrowUp, FaBars } from "react-icons/fa";

const ResponsiveNavbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className='resNav'>
        <div className='container'>
          <div className='resNavRow'>
            <img src='images/logo.jpg' alt='logo_image' />
            <button onClick={handleShow} className='resNavButton'>
              <FaBars />
            </button>
          
              <ul className= {show ? "resNavItems" : "translate-y-[-250px] absolute duration-200"}>
                <li>Book flights</li>
                <li>Information</li>
                <li>Help</li>
                <li>Travel Agents</li>
                <button onClick={handleShow} className='resNavreverseButton'>
                  Close <FaArrowUp />
                </button>
              </ul>
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNavbar;
