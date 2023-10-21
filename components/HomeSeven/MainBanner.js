import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const MainBanner = () => {
  return (
    <>
      <div className="hero-slider-area hero-slider-area-seven">
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="hero-slider-slide"
        >
          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-seven/home-seven-banner1.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text one">
                      <span className="top-title">Welcome to MTG</span>
                      <h1>
                      Exploring New Horizons in Healthcare
                      </h1>
                      <p>
                      Medical Technology Group to Exploring Advanced Molecular Diagnostics,
Charting the Path to Complex Clinical Laboratory Solutions and Proficiency

                      </p>

                      <div className="slider-btn">
                        <Link href="/appointment" className="default-btn">
                        Get a Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-seven/home-seven-banner2.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text two">
                      <span className="top-title">Welcome to MTG</span>
                      <h1>Your Path to Cutting-Edge Clinical Solutions</h1>
                      <p>
                       
Discover cutting-edge clinical solutions and embark
 on a path to innovative healthcare advancements with us

                      </p>

                      <div className="slider-btn">
                        <Link href="/appointment" className="default-btn">
                        Get a Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainBanner;
