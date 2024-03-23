// components/PortfolioSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const PortfolioSlider = ({ projects }) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <div>
                        {/* Tampilkan konten proyek di sini */}
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PortfolioSlider;
