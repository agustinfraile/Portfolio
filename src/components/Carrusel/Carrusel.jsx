import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrusel.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Card from "../Card/Card";
// import { cards } from "../../data";

const Carrusel = ({cards}) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth:100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card data={card}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default Carrusel