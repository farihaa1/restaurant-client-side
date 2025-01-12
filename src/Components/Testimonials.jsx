import React, { useEffect, useState } from "react";
import SectionTitle from "./Sectiontitle"; // Make sure the path is correct
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';


import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "./testimonial.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        heading={"What Our Client Say"}
        subHeading={"Testimonials"}
      ></SectionTitle>
      <div className="m-20">
        <Swiper
          navigation={true}
          modules={[Navigation]} // Ensure `Navigation` is passed correctly
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="p-8 px-16">
              <div className="flex flex-col items-center space-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating} // Use dynamic value
                  readOnly
                />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
