import React from 'react'
import './CommonExploreCart.css'

const CommonExploreCart = ({ cartImage, cartName }) => {
    return (
        <>
            <ul className='commonCart'>
                <img src={cartImage} alt="" />
                <li className='exploreCartInfo'>
                    <p className='cartName'>{cartName}</p>
                    <p>Australia</p>
                </li>
            </ul>
        </>
    )
}

export default CommonExploreCart