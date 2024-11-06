import React from 'react'
import './CommonProtectionCart.css'

const CommonProtectionCart = ({ icon, info, extraStyle }) => {
   
    return (
        <>
            <ul className={`${extraStyle} protectionCarts`}>
                <li className='protecttionCartsIcon'>{icon}</li>
                <li className='protecttionCartsInfo'>{info}</li>
            </ul>
        </>
    )
}

export default CommonProtectionCart