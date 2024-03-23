// components/PortfolioCard.js
import React from 'react';
import styles from './PortfolioCard.module.css';
import Image from 'next/image';

// URL placeholder gambar dummy
const placeholderImageUrl = 'https://via.placeholder.com/300';

const PortfolioCard = ({ title, description, imageUrl }) => {
    // Gunakan imageUrl yang diberikan jika tersedia, atau gunakan placeholderImageUrl
    const imageSrc = imageUrl || placeholderImageUrl;

    return (
        <div className={styles.card}>
          <Image src={imageSrc} alt={title} width={300} height={200} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
