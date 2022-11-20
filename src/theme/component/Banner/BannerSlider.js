import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const BannerSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div class="banner-Slider">
                <div class="banner-Slider-Right">
                    <Swiper
                        direction={"vertical"}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper w-full h-full"
                    >
                        <SwiperSlide><img className='' src="assets/img/banner-home-2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="assets/img/banner-home-2.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div class="banner-Slider-Left">
                    <div class="banner-Slider-Left-Top">
                        <img src="assets/img/banner-home-5.jpg" alt="" />
                        <div class="inner">
                            <h5 class="inner-Medium-Title">
                                stelina best collection
                            </h5>
                            <h3 class="inner-Big-Title">
                                up to 25% off order now
                            </h3>
                            <p class="inner-Price">
                                <span class="inner-Price-Title">new Price</span>
                                <span class="inner-Price-Value">$25,000</span>
                            </p>
                            <a href="#">shop now</a>

                        </div>
                    </div>
                    <div class="banner-Slider-Left-Bottom">
                        <img src="assets/img/banner-home-6.jpg" alt="" />
                        <div class="inner">
                            <h5 class="inner-Medium-Title">
                                stelina best collection
                            </h5>
                            <h3 class="inner-Big-Title">
                                up to 25% off order now
                            </h3>
                            <p class="inner-Price">
                                <span class="inner-Price-Title">new Price</span>
                                <span class="inner-Price-Value">$25,000</span>
                            </p>
                            <a href="#">shop now</a>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BannerSlider;