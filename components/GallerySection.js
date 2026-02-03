'use client';

import { useState } from 'react';
import styles from './GallerySection.module.css';

const categories = [
    { id: 'all', label: '전체' },
    { id: 'couple', label: '커플' },
    { id: 'family', label: '가족' },
    { id: 'friends', label: '우정샷' },
    { id: 'wedding', label: '하객룩' },
    { id: 'pet', label: '반려견' },
    { id: 'maternity', label: '만삭' }
];

// Placeholder images using gradients
const galleryItems = [
    { id: 1, category: 'couple', title: '커플 촬영', gradient: 'linear-gradient(135deg, #FFE4E1, #FADADD)' },
    { id: 2, category: 'family', title: '가족 촬영', gradient: 'linear-gradient(135deg, #FFF8F0, #F5E6D3)' },
    { id: 3, category: 'friends', title: '우정샷', gradient: 'linear-gradient(135deg, #E8B4B8, #D4969B)' },
    { id: 4, category: 'wedding', title: '하객룩', gradient: 'linear-gradient(135deg, #FADADD, #FFE4E1)' },
    { id: 5, category: 'pet', title: '반려견과 함께', gradient: 'linear-gradient(135deg, #F5E6D3, #FFF8F0)' },
    { id: 6, category: 'maternity', title: '만삭 촬영', gradient: 'linear-gradient(135deg, #FFE4E1, #E8B4B8)' },
    { id: 7, category: 'couple', title: '커플 셀프', gradient: 'linear-gradient(135deg, #FADADD, #F5E6D3)' },
    { id: 8, category: 'family', title: '온 가족이 함께', gradient: 'linear-gradient(135deg, #FFF8F0, #FADADD)' },
    { id: 9, category: 'friends', title: '친구들과', gradient: 'linear-gradient(135deg, #D4969B, #E8B4B8)' },
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
                            <div
                                className={styles.image}
                                style={{ background: item.gradient }}
                            >
                                <div className={styles.placeholder}>
                                    <span className={styles.placeholderIcon}>📸</span>
                                    <span className={styles.placeholderText}>{item.title}</span>
                                </div>
                            </div>
                            <div className={styles.overlay}>
                                <span className={styles.viewIcon}>🔍</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.more}>
                    <a
                        href="https://www.instagram.com/studio_bday"
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
                        <div
                            className={styles.lightboxImage}
                            style={{ background: selectedImage.gradient }}
                        >
                            <div className={styles.placeholder}>
                                <span className={styles.placeholderIcon} style={{ fontSize: '4rem' }}>📸</span>
                                <span className={styles.placeholderText} style={{ fontSize: '1.5rem' }}>{selectedImage.title}</span>
                            </div>
                        </div>
                        <p className={styles.lightboxTitle}>{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
