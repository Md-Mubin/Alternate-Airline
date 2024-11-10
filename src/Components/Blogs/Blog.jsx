import './Blog.css'
import React from "react";
import CommonBlog from "../../CommonComponents/CommonBlogs/CommonBlog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true
  };

  return (
    <>
      <section className='blogSection'>
        <div className='blogHead'>
          <h4>Blog</h4>
          <h1>Alternative adventures</h1>
        </div>

        <div className="slider-container">
          <Slider {...settings} >

            <CommonBlog
              blogName={"Travel advice"}
              blogInfo={
                "Popular destinations with no travel restrictions or quarantine"
              }
              addImage={"bg-[url('images/blog1.png')]"}
            />
            <CommonBlog
              blogName={"Destinations"}
              blogInfo={
                "The most beautiful locations around the world that you don't want to miss"
              }
              addImage={"bg-[url('images/blog2.jpg')]"}
            />
            <CommonBlog
              blogName={"Travel tips"}
              blogInfo={
                "What to take with you for the ultimate European adventure"
              }
              addImage={"bg-[url('images/blog3.png')]"}
            />
          </Slider>
        </div>

      </section>
    </>
  );
};
export default Blog;
