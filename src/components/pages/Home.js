import React, { useState } from 'react';
import '../../styles/home.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Ctrl from './HomeComponents/Ctrl';
import About from './HomeComponents/About';
import Education from './HomeComponents/Education';
import Experience from './HomeComponents/Experience';

export default function Home() {

    return (
            <section className='home-page-wrapper'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{ clickable: true }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='carousel'
                >
                    <SwiperSlide><Ctrl /></SwiperSlide>
                    <SwiperSlide><About /></SwiperSlide>
                    <SwiperSlide><Education /></SwiperSlide>
                    <SwiperSlide><Experience /></SwiperSlide>
                </Swiper>
            </section>
    );
}

// Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/photos/CpHNKNRwXps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
