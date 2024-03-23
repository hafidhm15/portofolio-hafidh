'use client'
// pages/portfolio.js
import React from 'react';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import PortfolioCardSlider from './component/PortfolioCardSlider';


const PortfolioPage = () => {
    // Data dummy proyek
    const dummyProjects = [
        {
            title: 'Web Food Order Vidi Kitchen',
            description: 'Utilized: React Js, Bootstrap, Laravel, MySQL',
            imageUrl: '/project1.png',
        },
        {
            title: 'Web Sistem Administrasi Pusyankeswan',
            description: 'Utilized: Vanilla JS, Laravel, MySQL',
            imageUrl: '/project2.png',
        },
        {
            title: 'Web Landing Page PunyaLink Portal Job',
            description: 'Utilized: Bootstrap,Vanilla JS, CI 3, MySQL',
            imageUrl: '/project3.png',
        },
        {
            title: 'Microfrontend Mockup Dash Kemenkes x BNI ',
            description: 'Utilized: React js, single spa, Tailwind',
            imageUrl: '/project4.png',
        },
        {
            title: 'Sebiru Hijab Web',
            description: 'Utilized: React Js, Bootstrap, Laravel, MySQL',
            imageUrl: '/project5.png',
        },
        // Tambahkan proyek dummy lainnya di sini
    ];

    return (
        <div>
            <Header />
            <HeroSection />
            <section id="portfolio" style={{ backgroundColor: '#90D26D' }}>
            <PortfolioCardSlider projects={dummyProjects} />
            </section>
        </div>
      
    );
};

export default PortfolioPage;
