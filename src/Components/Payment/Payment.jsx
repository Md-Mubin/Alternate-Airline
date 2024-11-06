import React from 'react'
import './Payment.css'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const Payment = () => {
    return (
        <>
            <section className='paymentSection'>
                <div className="container">
                    <div className="paymentPart">
                        <div className="paymentinfoCol">
                            <h1>Buy now, pay later</h1>
                            <p>Book your flights today and spread the cost over time with one of our instalment options.</p>
                            <ul className='bulletPoint'>
                                <li><IoIosCheckmarkCircle className='icon'/>Make payments weekly or monthly</li>
                                <li><IoIosCheckmarkCircle className='icon'/>Interest free options</li>
                                <li><IoIosCheckmarkCircle className='icon'/>Fast approval</li>
                            </ul>
                            <button>Browse payment methods</button>
                        </div>

                        <div className="paymentSectionImage">
                            <img src="images/mobile.png" alt="mobile_image" className='mainImage'/>
                            <img src="images/mobile_child1.png" alt="child_image" className='child1'/>
                            <img src="images/mobile_child2.png" alt="child_image" className='child2'/>
                            <img src="images/mobile_child3.png" alt="child_image" className='child3'/>
                            <img src="images/mobile_child4.png" alt="child_image" className='child4'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Payment