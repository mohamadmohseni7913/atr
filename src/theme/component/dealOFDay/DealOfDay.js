import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";


import ProductCard from '../productCard/ProductCard';
import { useSelector } from 'react-redux';

const DealOfDay = () => {
    const product=useSelector(state=>state.entities.product.list)

    return (
        <>
            <section className='deal-Of-Day'>
                <h2>deal of the day</h2>
                <div class="under-Line"></div>
                {/* <!-- deal of day products start --> */}
                <div className="deal-Of-Day-Products">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,

                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={false}

                        loop={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                            {
                                product.map(item=>
                                    <SwiperSlide>  <ProductCard to={item.link} countProps={true} name={item.name} price={item.code}  /> </SwiperSlide>
                                    )
                            }
                       

                    </Swiper>


                </div>
            </section>
        </>
    );
};

export default DealOfDay;