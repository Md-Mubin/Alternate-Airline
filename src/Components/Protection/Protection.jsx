import React from 'react'
import './Protection.css'
import CommonProtectionCart from '../../CommonComponents/CommonProtectionCarts/CommonProtectionCart'
import { BsCloudRainHeavy, BsHeartPulse } from 'react-icons/bs'
import { BiPlusMedical } from 'react-icons/bi'
import { TbPlaneOff } from 'react-icons/tb'
import { TfiTarget } from 'react-icons/tfi'
import { PiMapPinPlusFill } from 'react-icons/pi'

const Protection = () => {
    return (
        <>
            <section className='protectionSection'>
                <div className="container">
                    <div className="protectionRow">
                        <ul className="recomandedCol">
                            <li className='recomendBTN'>Recommended</li>
                            <li><img src="images/protection_Mobile.png" alt="mobile_image" /></li>
                        </ul>

                        <ul className='protectionInfoCol'>
                            <h1>Cancellation protection</h1>
                            <h2>During these uncertain times we recommend adding Cancellation protection to your booking</h2>

                            <div className="protectionCartRow">
                                <CommonProtectionCart icon={<BsHeartPulse/>} info={"Illness"} extraStyle={"py-[17px]"}/>
                                <CommonProtectionCart icon={<BsCloudRainHeavy/>} info={"Weather"} extraStyle={"py-[17px]"}/>
                                <CommonProtectionCart icon={<BiPlusMedical/>} info={"Emergency"} extraStyle={"py-[17px]"}/>
                                <CommonProtectionCart icon={<TbPlaneOff/>} info={"Refundable Booking"} extraStyle={"py-[10px]"}/>
                                <CommonProtectionCart icon={<TfiTarget/>} info={"Mechanical Breakdown"} extraStyle={"py-[10px]"}/>
                                <CommonProtectionCart icon={<PiMapPinPlusFill />} info={"Plus much much more"} extraStyle={"py-[10px]"}/>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Protection