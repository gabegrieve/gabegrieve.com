import Layout from "../components/layout";
import Socials from "../components/socials";
import Arrow from "../public/icons/arrow.svg";
import SectionHeading from "../components/sectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <Layout>
      <div className="container mb-8">
        <h1 className="text-center sm:text-left heading-three sm:heading-one lg:heading-super py-4 lg:py-16 xl:w-3/4">
          I'm a creative developer, designer, product manager &amp; musician
          based in Sydney.
        </h1>
        <div className="flex justify-center sm:justify-end">
          <a href="" className="btn-icon inline-flex items-center mt-4">
            <span className="text-sm lg:text-base">About me</span>
            <div className="svg-control w-4">
              <Arrow />
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <h2 className="heading-one xs:heading-super leading-none font-raks uppercase text-center">
          Doing things in the real world
        </h2>
        <section className="py-4">
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
                <figure className="rounded-md object-square">
                  <img src="/images/gabe_one.jpg" alt="" />
                </figure>
                <span className="text-xs text-dull-blue">
                  Playing wonderwall
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-8">
                <figure className="rounded-md object-square">
                  <img src="/images/gabe_two.jpg" alt="" />
                </figure>
                <span className="text-xs text-dull-blue">
                  Looking out windows
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-8">
                <figure className="rounded-md object-square">
                  <img src="/images/gabe_three.jpg" alt="" />
                </figure>
                <span className="text-xs text-dull-blue">Drinking batchy</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-8">
                <figure className="rounded-md object-square">
                  <img src="/images/gabe_four.jpg" alt="" />
                </figure>
                <span className="text-xs text-dull-blue">
                  Rollin' and bowlin'
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-8">
                <figure className="rounded-md object-square">
                  <img src="/images/gabe_five.jpg" alt="" />
                </figure>
                <span className="text-xs text-dull-blue">Smooching mics</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-8">
                <figure className="rounded-md object-square">
                  <img src="/images/gabe_six.jpg" alt="" />
                </figure>
                <span className="text-xs text-dull-blue">
                  Overland tracking
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-8">
                <figure className="rounded-md object-square">
                  <img src="/images/gabe_seven.jpg" alt="" />
                </figure>
                <span className="text-xs text-dull-blue">Being cold</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </Layout>
  );
}
