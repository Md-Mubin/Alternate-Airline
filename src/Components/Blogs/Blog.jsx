import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Blog.css";
import CommonBlog from "../../CommonComponents/CommonBlogs/CommonBlog";

const Blog = () => {
   
  return (
    <>
      <section className='blogSection'>
        <div className='blogHead'>
          <h4>Blog</h4>
          <h1>Alternative adventures</h1>
        </div>

        <Carousel infiniteLoop emulateTouch interval={1500} autoPlay={true}>
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
        </Carousel>
      </section>
    </>
  );
};
export default Blog;
