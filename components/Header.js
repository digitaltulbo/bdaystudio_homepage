'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '소개', href: '#features' },
    { label: '갤러리', href: '#gallery' },
    { label: '이용안내', href: '#pricing' },
    { label: '오시는 길', href: '#location' },
    { label: 'AI 서비스', href: '#ai-services' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>📸</span>
          <span className={styles.logoText}>Studio B-day</span>
        </a>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className={styles.navLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://pf.kakao.com/_example" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn btn-kakao ${styles.reserveBtn}`}
          >
            예약하기
          </a>
        </nav>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>
    </header>
  );
}
