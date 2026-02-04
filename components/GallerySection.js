'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css';

const categories = [
    { id: 'all', label: '전체' },
    { id: 'family', label: '가족' },
    { id: 'maternity', label: '만삭' },
    { id: 'baby', label: '아기' },
];

// Real images from bdaystudio.store
const galleryItems = [
    { 
        id: 1, 
        category: 'baby', 
        title: '우리 아기의 첫 친구', 
        image: 'https://sspark.genspark.ai/cfimages?u1=KyFFlXpeTHqNUqv8VvAEfnJeWbKZPJEScVZo1hQiv8%2Fibyvl2LP%2FAIL0OMT7mtx2f7X31pgG84HUqlwhfs1CayBlgSNk%2B0ya%2BKU%3D&u2=HKsxJM5ShPjOXIaU&width=1024'
    },
    { 
        id: 2, 
        category: 'baby', 
        title: '인형과 함께, 널 기다려', 
        image: 'https://sspark.genspark.ai/cfimages?u1=fcN7bypjRoyXbq9mf3hZgbSwzaJF60S2zOo%2FlfJWtPs0Yi32HfNOu08I%2FqIQkINrflfx1l8YRH9nblHR1KXL7sbF33Qz4jlgfOA%3D&u2=wESib1UeF1%2F89LWc&width=1024'
    },
    { 
        id: 3, 
        category: 'baby', 
        title: '토끼 인형과 함께', 
        image: 'https://sspark.genspark.ai/cfimages?u1=s7luB14PEQgd%2FECGTh93Qv98bJGmRm8ugOUJI33kd0WrhSW09p%2FguPWtJLpyzDmBPhnpBYVyXSLFFLH65r%2BA9W2vd2BmRt8OdRU%3D&u2=v%2FWtL52tmBHJnmZC&width=1024'
    },
    { 
        id: 4, 
        category: 'maternity', 
        title: '배 위에 올라온 토끼 친구', 
        image: 'https://sspark.genspark.ai/cfimages?u1=1wy0MjWyAD1J7nXzTXTHwUgzbQSfeeLJJhB1ND3XgLepcYgDhgOAUIo9k7UIk3cj3S4aKEaIhoDYRp3PcIgshzb1s%2BDVwTCENIk%3D&u2=NRj%2FpElpmkp3V7UJ&width=1024'
    },
    { 
        id: 5, 
        category: 'maternity', 
        title: '만삭의 행복한 순간', 
        image: 'https://sspark.genspark.ai/cfimages?u1=sOXkq4MUdo6rzY7Klqqv1pUtVSjPQHXBLaUh5L54IuKr1EuRl6CPfWqfay%2Fvzdrkr0xvFxryk34Lm1UU2qUEuaFXW%2Fx%2FhA9pT%2Bk%3D&u2=Aj1KUFZn5hf65vRj&width=1024'
    },
    { 
        id: 6, 
        category: 'family', 
        title: '아빠가 들어볼게', 
        image: 'https://sspark.genspark.ai/cfimages?u1=Q5FwgdReaVHdE85nJy6toVXjBId7SYnOGev1dONT76m73lt%2ByvU77YK94EVEpwumtxoQJ0guoIQFUezGInayUN8OCdLw%2FlIRLAE%3D&u2=TVWgYuQ6mFbnJltj&width=1024'
    },
    { 
        id: 7, 
        category: 'family', 
        title: '가장 가까이, 셋이서', 
        image: 'https://sspark.genspark.ai/cfimages?u1=LbD1j29WhLHdpdE%2BhDrzXC2hbqJxM6fHQ8OP4CnTvTTGqPWlrdKXYmGm22eFGJFjSmnhnpPf%2Fq3jZYYdwSmTM%2BhlSDgJDhQgtMM%3D&u2=OncLg5o66SIvQ%2B%2Bq&width=1024'
    },
    { 
        id: 8, 
        category: 'maternity', 
        title: '셋이 되는 우리', 
        image: 'https://sspark.genspark.ai/cfimages?u1=BpXvGKFdyTqt4lLTaPFz12gKobEiqjrZ3hE0C5jvVReU6ctT2a90ikJ%2FFG5Fa4I3YHMWloOzBfTRegIz4IrxoMEalf4yhj23gb8%3D&u2=XgJmXlDyAJUEcPq3&width=1024'
    },
    { 
        id: 9, 
        category: 'maternity', 
        title: '이마에 닿는 사랑', 
        image: 'https://sspark.genspark.ai/cfimages?u1=VpvGUwjZHjJE%2BYb%2BtVbk31Kz%2BsQhZWAfxBIyO8jnejD5wOMrZc9bpdgo0Pk7YCxe0gJAEWTWIDyBVSZspPdEu3SlhBZCyrQaeyo%3D&u2=qpOjq2d8LMfIHI8g&width=1024'
    },
    { 
        id: 10, 
        category: 'family', 
        title: '둘이 함께 감싸는 우리 아기', 
        image: 'https://sspark.genspark.ai/cfimages?u1=0SVP3nV2WJBev533LUaE2ky%2FKvH02R9PAu5SRh84pYeFkFNJUwRrMvaOR7lJS8Emthf8qL4aXt4hZU0qpfHvfim3TDh9BQM%2BFGg%3D&u2=Lw0xyH3IhJtW9ffX&width=1024'
    },
];

export default function GallerySection() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section id="gallery" className={`section ${styles.gallery}`}>
            <div className="container">
                <div className="section-title">
                    <h2>포트폴리오</h2>
                    <p>Studio B-day에서 촬영된 특별한 순간들</p>
                </div>

                <div className={styles.tabs}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`${styles.tab} ${activeCategory === category.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={styles.item}
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.image}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.overlay}>
                                <span className={styles.overlayTitle}>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.more}>
                    <a
                        href="https://www.instagram.com/bday_yatap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        인스타그램에서 더 보기
                    </a>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
                    <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>✕</button>
                        <div className={styles.lightboxImageWrapper}>
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className={styles.lightboxImage}
                            />
                        </div>
                        <p className={styles.lightboxTitle}>{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
