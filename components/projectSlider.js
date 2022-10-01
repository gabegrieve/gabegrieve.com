import { Swiper, SwiperSlide } from "swiper/react";
import RalleeLogo from "../public/icons/rallee-logo.svg";
import UnscriptedLogo from "../public/icons/unscripted-logo.svg";
import AntgLogo from "../public/icons/antg-logo.svg";
import Arrow from "../public/icons/arrow.svg";

export default function PhotoSlider() {
  return (
    <>
      <Swiper
        autoplay={{ delay: 3500 }}
        slidesPerView={1}
        spaceBetween={16}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        <SwiperSlide>
          <div className="safari-mask relative mb-8 h-96 w-full rounded-lg">
            <img
              src="/images/rallee-bg.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
            <div className="contrast-gradient absolute bottom-0 z-0 h-48 w-full"></div>
            <div className="absolute bottom-0 z-10 p-4 text-white">
              <div className="svg-control mb-4 w-16">
                <RalleeLogo icon="true" width="100%" />
              </div>
              <div className="flex items-end">
                <h5 className="heading-two leading-tighter">
                  A lifestyle tennis brand for sinners and set winners
                </h5>
                <a href="" className="btn-icon mt-4 inline-flex items-center">
                  <span className="text-sm">More</span>
                  <div className="svg-control w-4">
                    <Arrow />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="safari-mask relative mb-8 h-96 w-full rounded-lg">
            <img
              src="/images/unscripted-bg.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
            <div className="contrast-gradient absolute bottom-0 z-0 h-48 w-full"></div>
            <div className="absolute bottom-0 z-10 p-4 text-white">
              <div className="svg-control mb-4 w-32">
                <UnscriptedLogo icon="true" width="100%" />
              </div>
              <div className="flex items-end">
                <h5 className="heading-two leading-tighter">
                  An all-in-one photography business platform
                </h5>
                <a href="" className="btn-icon mt-4 inline-flex items-center">
                  <span className="text-sm">More</span>
                  <div className="svg-control w-4">
                    <Arrow />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="safari-mask relative mb-8 h-96 w-full rounded-lg">
            <img
              src="/images/antg-bg.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
            <div className="contrast-gradient absolute bottom-0 z-0 h-48 w-full"></div>
            <div className="absolute bottom-0 z-10 p-4 text-white">
              <div className="svg-control mb-4 w-16">
                <AntgLogo icon="true" width="100%" />
              </div>
              <div className="flex items-end">
                <h5 className="heading-two leading-tighter">
                  An e-commerce solution for medicinal cannabis supply
                </h5>
                <a href="" className="btn-icon mt-4 inline-flex items-center">
                  <span className="text-sm">More</span>
                  <div className="svg-control w-4">
                    <Arrow />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
