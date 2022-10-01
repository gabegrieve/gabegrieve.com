import { Swiper, SwiperSlide } from "swiper/react";

export default function PhotoSlider() {
  return (
    <>
      <Swiper
        autoplay={{ delay: 3500 }}
        slidesPerView={2}
        spaceBetween={16}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        <SwiperSlide>
          <div className="mb-8">
            <figure className="object-square rounded-md">
              <img src="/images/gabe_one.jpg" alt="" />
            </figure>
            <span className="text-xs text-dull-blue">Playing wonderwall</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-8">
            <figure className="object-square rounded-md">
              <img src="/images/gabe_two.jpg" alt="" />
            </figure>
            <span className="text-xs text-dull-blue">Looking out windows</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-8">
            <figure className="object-square rounded-md">
              <img src="/images/gabe_three.jpg" alt="" />
            </figure>
            <span className="text-xs text-dull-blue">Drinking batchy</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-8">
            <figure className="object-square rounded-md">
              <img src="/images/gabe_four.jpg" alt="" />
            </figure>
            <span className="text-xs text-dull-blue">Rollin' and bowlin'</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-8">
            <figure className="object-square rounded-md">
              <img src="/images/gabe_five.jpg" alt="" />
            </figure>
            <span className="text-xs text-dull-blue">Smooching mics</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-8">
            <figure className="object-square rounded-md">
              <img src="/images/gabe_six.jpg" alt="" />
            </figure>
            <span className="text-xs text-dull-blue">Overland tracking</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-8">
            <figure className="object-square rounded-md">
              <img src="/images/gabe_seven.jpg" alt="" />
            </figure>
            <span className="text-xs text-dull-blue">Being cold</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
