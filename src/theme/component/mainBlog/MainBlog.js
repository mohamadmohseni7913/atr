import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import BlogCard from './BlogCard';


const MainBlog = () => {
    return (
        <section className='main-Blog-Slider'>
            <h2>out last news</h2>
            <div class="under-Line"></div>
            <div className='main-Blog-Slider-Post'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,

                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}

                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide><BlogCard /></SwiperSlide>
                    <SwiperSlide><BlogCard /></SwiperSlide>
                    <SwiperSlide><BlogCard /></SwiperSlide>
                    <SwiperSlide><BlogCard /></SwiperSlide>
                    <SwiperSlide><BlogCard /> </SwiperSlide>

                </Swiper>


            </div>
        </section>
    );
};

export default MainBlog;