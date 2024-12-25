import './Blog.css'
import React from "react";
import CommonBlog from "../../CommonComponents/CommonBlogs/CommonBlog";
import Slider from 'react-slick';

const Blog = () => {

  const settings = {
    className: "center",
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "400px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "0px",
        }
      }
    ]
  }

  return (
    <>
      {/* -------------------------------------------------------- */}
      {/* ================== Blog Section Start ================== */}

      <section className='blogSection'>
        <div className='blogHead'>
          <h4>Blog</h4>
          <h1>Alternative adventures</h1>
        </div>

        <div className="slider-container">
          <Slider {...settings} >

            <div className='cursor-grab active:cursor-grabbing select-none'>
              <CommonBlog
                blogName={"Travel advice"}
                blogInfo={
                  "Popular destinations with no travel restrictions or quarantine"
                }
                addImage={"bg-[url('images/blog1.png')]"}
              />
            </div>

            <div className='cursor-grab active:cursor-grabbing select-none'>
              <CommonBlog
                blogName={"Destinations"}
                blogInfo={
                  "The most beautiful locations around the world that you don't want to miss"
                }
                addImage={"bg-[url('images/blog2.jpg')]"}
              />
            </div>

            <div className='cursor-grab active:cursor-grabbing select-none'>
              <CommonBlog
                blogName={"Travel tips"}
                blogInfo={
                  "What to take with you for the ultimate European adventure"
                }
                addImage={"bg-[url('images/blog3.png')]"}
              />
            </div>
          </Slider>
        </div>

      </section>

      {/* ================== Blog Section End ================== */}
      {/* ------------------------------------------------------ */}
    </>
  );
};
export default Blog;
