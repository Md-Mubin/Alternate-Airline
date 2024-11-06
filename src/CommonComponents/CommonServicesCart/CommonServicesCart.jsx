import React from 'react'
import './CommonServicesCart.css'

const CommonServicesCart = ({serviceHead, serviceIcon, serviceInfo}) => {
  return (
    <>
      <ul className="serviceCart">
        <li className='serviceIcon'>{serviceIcon}</li>
        <li className='serviceHead'>{serviceHead}</li>
        <li className='serviceInfo'>{serviceInfo}</li>
      </ul>
    </>
  )
}

export default CommonServicesCart