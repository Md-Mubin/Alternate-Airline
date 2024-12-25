import React, { useState } from 'react'
import './Banner.css'
import CommonBannerCarts from '../../CommonComponents/CommonBannerCarts/CommonBannerCarts'

const Banner = () => {

  const [move, setMove] = useState(false)

  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* ================== Banner Section Start ================== */}

      <section className='bannerSection'>
        <div className="container">
          <div className="bannerHead">
            <h1>Search and book flights to Australia</h1>
            <h2>Buy your flights now and pay later</h2>
            <div className="scoreInBanner">
              <img src="images/rating_image.png" alt="rating_images" />
              <ul className='scoreNames'>
                <li>TrustScore <span>4.5</span></li>
                <li><span>6,500</span> reviews</li>
              </ul>
            </div>
          </div>

          <div className="bannerTable">
            <ul className='bannerTableHead'>
              <div className="buttonsRow">
                <button>Return</button>
                <button>One Way</button>
                <button>Multi-city</button>
              </div>
              <div className="selectRow">
                <h6>Direct flights only</h6>
                <div onClick={() => setMove(!move)} className='moveButton'>
                  <button className={move ? "right-[2px]" : "left-[2px]"}></button>
                </div>
              </div>
            </ul>

            <ul className='bannerMainTable'>
              <div className="bannerCartRow">
                <CommonBannerCarts cartHead={"Where from?"} cartInfo={"London (LON)"} />
                <CommonBannerCarts cartHead={"Where to?"} cartInfo={"Sydney (SYD)"} />
                <CommonBannerCarts cartHead={"Dates"} cartHead2={"14 Nights"} cartInfo={"Sat 11 Jun - Sat 25 Jun"} />
                <CommonBannerCarts cartHead={"Passengers"} cartInfo={"2 Adults, Any class"} />
                <button>Search flights</button>
              </div>
            </ul>
          </div>
        </div>
      </section>

      {/* ================== Banner Section End ================== */}
      {/* -------------------------------------------------------- */}
    </>
  )
}

export default Banner