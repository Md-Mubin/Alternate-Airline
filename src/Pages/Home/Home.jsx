import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Services from '../../Components/Services/Services'
import Exploring from '../../Components/Exploring/Exploring'
import Protection from '../../Components/Protection/Protection'
import Blog from '../../Components/Blogs/Blog'
import Payment from '../../Components/Payment/Payment'

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Payment />
      <Exploring />
      <Protection/>
      <Blog/>
    </>
  )
}

export default Home