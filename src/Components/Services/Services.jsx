import React from 'react'
import './Services.css'
import CommonServicesCart from '../../CommonComponents/CommonServicesCart/CommonServicesCart'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { IoMdAirplane } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

const Services = () => {
  return (
    <>
      {/* ----------------------------------------------------------- */}
      {/* ================== Service Section Start ================== */}

      <section className='serviceSection'>
        <div className="container">
          <div className="serviceCartRow">
            <CommonServicesCart serviceHead={"Simple search"} serviceInfo={"Easily search and book flights from anywhere in the world"} serviceIcon={<IoSearch />} />
            <CommonServicesCart serviceHead={"Unlimited choice"} serviceInfo={"Find the flight you were looking for and pay on your terms"} serviceIcon={<IoMdAirplane />} />
            <CommonServicesCart serviceHead={"Expert customer service"} serviceInfo={"Dedicated customer support team once you have bookedr"} serviceIcon={<HiOutlineChatBubbleOvalLeft />} />
          </div>
        </div>
      </section>

      {/* ================== Service Section End ================== */}
      {/* --------------------------------------------------------- */}
    </>
  )
}

export default Services