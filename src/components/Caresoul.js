import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../images/one.jpeg";
import two from "../images/two.jpeg";
import three from "../images/three.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Caresoul = () => {
  return (
    <div className="w-[90%] h-[90%] mx-auto flex gap-[20%] mt-5 pt-[50px]">
      <Swiper className="mySwiper" autoplay={true} effect="fade">
        <SwiperSlide>
          <img
            className="rounded-[20px] object-cover w-full h-full object-center"
            src={one}
            alt="One"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-[20px] object-cover"
            w-full
            h-full
            object-center
            src={two}
            alt="Two"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-[20px] object-cover"
            w-full
            h-full
            object-center
            src={three}
            alt="Three"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Caresoul;
