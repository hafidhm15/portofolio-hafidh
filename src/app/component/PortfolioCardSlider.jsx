// PortfolioCardSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PortfolioCard from './PortfolioCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './PortfolioCardSlider.module.css'; // Import CSS module

const PortfolioCardSlider = ({ projects }) => {

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`${styles.arrow} ${styles['arrow-left']}`} onClick={onClick}> {/* Use CSS module class */}
                <FaArrowLeft />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`${styles.arrow} ${styles['arrow-right']}`} onClick={onClick}> {/* Use CSS module class */}
                <FaArrowRight />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [ // Responsiveness settings
            {
                breakpoint: 1024, // Breakpoint for tablets and desktops
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // Breakpoint for smaller devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className={styles['portfolio-slider']}> {/* Use CSS module class */}
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <PortfolioCard
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PortfolioCardSlider;
