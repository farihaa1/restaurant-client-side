import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css"

const Banner = () => {

  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        showThumbs={true}
        showStatus={false}
        interval={6000}
        stopOnHover
       
      >
        <div>
          <img src="../../../home/01.jpg" />
        
        </div>
        <div>
          <img src="../../../home/02.jpg" />
         
        </div>
        <div>
          <img src="../../../home/03.png" />
        
        </div>
        <div>
          <img src="../../../home/04.jpg" />
         
        </div>
        <div>
          <img src="../../../home/05.png" />
         
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
