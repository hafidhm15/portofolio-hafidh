// components/Header.js
import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.navLinks}>
                    <li><Link href="/">My Portfolio</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                        {/* Tambahkan link ke bagian-bagian lain jika diperlukan */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
