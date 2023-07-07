import React from "react";
import "./indexation.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../assets/img/base.png";
import slide_image_2 from "../../assets/img/cressfor.png";
import slide_image_3 from "../../assets/img/dimensions.png";
import slide_image_4 from "../../assets/img/google.png";
import slide_image_5 from "../../assets/img/index.png";
import slide_image_6 from "../../assets/img/issn.png";
import slide_image_7 from "../../assets/img/ssrn.png";

function Indexation() {
  return (
    <section className="indexation">
      <div className="container">
        <h1 className="heading">Index jurnallari</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" className="img-fluid" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <BiChevronLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <BiChevronRight />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Indexation;
