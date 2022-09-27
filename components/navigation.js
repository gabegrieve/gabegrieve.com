import { siteTitle } from "../components/layout";
import Dots from "../public/icons/dots.svg";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Navigation({ children }) {
  return (
    <div className="container">
      <div className="flex justify-between items-center my-4 relative">
        <div className="swiper-container">
          <div className="flex">
            <h2 className="mr-1 whitespace-nowrap">{siteTitle}</h2>
            <div className="w-full text-light-blue">
              <Swiper
                autoplay={{ delay: 3000 }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
              >
                <SwiperSlide>Front-end Developer</SwiperSlide>
                <SwiperSlide>Designer</SwiperSlide>
                <SwiperSlide>Product Manager</SwiperSlide>
                <SwiperSlide>Musician</SwiperSlide>
                <SwiperSlide>Yogi</SwiperSlide>
                <SwiperSlide>Coffee Snob</SwiperSlide>
                <SwiperSlide>Bass Player</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <button className="relative z-50">
          <div className="svg-control w-4">
            <Dots />
          </div>
        </button>
      </div>
    </div>
  );
}
