import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Category.css";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../Components/Sectiontitle";

const Category = () => {
  return (
    <div className="my-12">
        <section>
            <SectionTitle heading={"---From 11:00am to 10:00pm---"} subHeading={'ORDER ONLINE'}></SectionTitle>
        </section>
      <Swiper
        slidesPerView={3}
        autoplay
        spaceBetween={20}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col py-10">
          <img src="../../../home/slide1.jpg" alt="" />
          <h3 className="text-3xl bg-black bg-opacity-25 text-white w-full uppercase font-semibold -mt-20 py-6 mb-20">Salads</h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col py-10">
          <img src="../../../home/slide2.jpg" alt="" />
          <h3 className="text-3xl bg-black bg-opacity-25 text-white w-full uppercase font-semibold -mt-20 py-6 mb-20">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col py-10">
          <img src="../../../home/slide3.jpg" alt="" />
          <h3 className="text-3xl bg-black bg-opacity-25 text-white w-full uppercase font-semibold -mt-20 py-6 mb-20">Soups</h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col py-10">
          <img src="../../../home/slide4.jpg" alt="" />
          <h3 className="text-3xl bg-black bg-opacity-25 text-white w-full uppercase font-semibold -mt-20 py-6 mb-20">desert</h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col py-10">
          <img src="../../../home/slide5.jpg" alt="" />
          <h3 className="text-3xl bg-black bg-opacity-25 text-white w-full uppercase font-semibold -mt-20 py-6 mb-20">Salads</h3>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Category;
