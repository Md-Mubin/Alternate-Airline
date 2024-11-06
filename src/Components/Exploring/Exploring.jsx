import React from 'react'
import './Exploring.css'
import CommonExploreCart from '../../CommonComponents/CommonExplorCart/CommonExploreCart'
const Exploring = () => {
    return (
        <>
            <section className='exploringSection'>
                <div className="container">
                    <h1>Exploring Australia</h1>
                    <div className="exploringCarts">
                        <CommonExploreCart cartImage={"images/Sydney.jpg"} cartName={"Sydney"}/>
                        <CommonExploreCart cartImage={"images/Melbourne.jpg"} cartName={"Melbourne"}/>
                        <CommonExploreCart cartImage={"images/Brisbane.jpg"} cartName={"Brisbane"}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Exploring