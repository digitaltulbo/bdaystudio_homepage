'use client';

import { useState, useEffect } from 'react';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero section (about 300px)
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
            {/* Expanded menu */}
            <div className={`${styles.expandedMenu} ${isExpanded ? styles.show : ''}`}>
                <a
                    href="https://talk.naver.com/profile/weckh5v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.menuItem}
                >
                    <span className={styles.menuIcon}>💬</span>
                    <span>네이버톡톡 문의</span>
                </a>
            </div>

            {/* Main CTA Button */}
            <div className={styles.mainButtons}>
                <button
                    className={styles.expandBtn}
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label="더보기"
                >
                    <span className={`${styles.plusIcon} ${isExpanded ? styles.rotated : ''}`}>+</span>
                </button>

                <a
                    href="https://naver.me/5ssB0M3B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.naverBtn}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                    </svg>
                    <span>네이버 예약</span>
                </a>
            </div>
        </div>
    );
}
