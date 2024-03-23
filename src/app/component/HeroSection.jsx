// components/HeroSection.js
import React from 'react';
import Image from 'next/image'; // Import Image component for image optimization
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <p className={styles.subname}>Hi I&apos;m Hafidh A Software Engineer</p> {/* Escape single quote */}
                    <h2 className={styles.heading}>Welcome To My Portfolio!</h2>
                    <p className={styles.subheading}>Explore my latest works and find inspiration.</p>
                
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
