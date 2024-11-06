import React from 'react'
import './CommonBannerCarts.css'

const CommonBannerCarts = ({cartHead, cartHead2, cartInfo, cartDesign}) => {
    return (
        <>
            <ul className={`${cartDesign} carts`}>
                <li className='cartHead'>{cartHead} <span>{cartHead2}</span></li>
                <li className='cartInfo'>{cartInfo}</li>
            </ul>
        </>
    )
}

export default CommonBannerCarts