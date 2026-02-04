'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ReviewsSection.module.css';

const reviews = [
    {
        id: 1,
        name: '예*맘',
        type: '만삭 촬영',
        rating: 5,
        date: '2024.10',
        content: '프라이빗한 공간이라 눈치보이지 않고 부담없이 이용할 수 있는 게 장점이었어요. 부끄러움 많은 아이도 누군가가 찍어줄 때보다 자연스럽고 익살스럽게 표정을 잘 짓더라고요 :-)',
        highlight: '자연스러운 표정',
        source: '네이버 블로그'
    },
    {
        id: 2,
        name: '두*마*',
        type: '가족 촬영',
        rating: 5,
        date: '2024.10',
        content: '아이가 좋아하는 공간이 있어서 아이 컨디션 조절에도 좋았어요. 사장님 안 계시니깐 내 맘대로 포즈도 취하고 소품도 마음대로 사용할 수 있으니 표정도 훨씬 자연스럽고!',
        highlight: '아이와 함께',
        source: '네이버 블로그'
    },
    {
        id: 3,
        name: '정*이*',
        type: '가족 촬영',
        rating: 5,
        date: '2024.11',
        content: '무인사진관이라 낮갈이가 심한 아이, 경계심이 심한 아이도 편안하게 촬영 가능해요. 아이들이 충분히 놀고 휴식할 수 있는 공간이 있어서 촬영부담이 적었답니다!',
        highlight: '아이 맞춤 공간',
        source: '네이버 블로그'
    },
    {
        id: 4,
        name: '행*한*정',
        type: '커플 촬영',
        rating: 5,
        date: '2024.09',
        content: '소품들이 다양하고 깔끔하게 관리되어 있어요. AI 보정이 뭐 얼마나 괜찮겠어 싶었는데 결과물이 예상보다 예쁘게 되더라고요! 원본 파일도 무료로 제공해주세요!',
        highlight: 'AI 보정 만족',
        source: '네이버 블로그'
    },
    {
        id: 5,
        name: '웨*하*',
        type: '하객룩',
        rating: 5,
        date: '2024.11',
        content: '라온제나 분당 결혼식 전에 하객룩 촬영하러 왔어요! 도보로 가까워서 시간 여유있게 촬영하고 식장 갔어요. 하객룩 사진 너무 잘 나와서 대만족입니다 ㅎㅎ',
        highlight: '결혼식장 근처',
        source: '네이버 예약'
    }
];

export default function ReviewsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    // Auto scroll for mobile
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="reviews" className={`section ${styles.reviews}`}>
            <div className="container">
                <div className="section-title">
                    <h2>고객 후기</h2>
                    <p>실제 방문 고객님들의 생생한 후기예요</p>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>4.9</span>
                        <div className={styles.stars}>★★★★★</div>
                        <span className={styles.statLabel}>평균 평점</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>250+</span>
                        <span className={styles.statLabel}>네이버 리뷰</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>98%</span>
                        <span className={styles.statLabel}>재방문 의사</span>
                    </div>
                </div>

                <div className={styles.reviewsWrapper}>
                    <div className={styles.reviewsGrid} ref={scrollRef}>
                        {reviews.map((review, index) => (
                            <div 
                                key={review.id} 
                                className={`${styles.reviewCard} ${index === activeIndex ? styles.active : ''}`}
                            >
                                <div className={styles.reviewHeader}>
                                    <div className={styles.reviewMeta}>
                                        <span className={styles.reviewerName}>{review.name}</span>
                                        <span className={styles.reviewType}>{review.type}</span>
                                    </div>
                                    <div className={styles.reviewRating}>
                                        {'★'.repeat(review.rating)}
                                    </div>
                                </div>
                                <p className={styles.reviewContent}>"{review.content}"</p>
                                <div className={styles.reviewFooter}>
                                    <span className={styles.highlight}>#{review.highlight}</span>
                                    <span className={styles.reviewSource}>{review.source} · {review.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile dots indicator */}
                <div className={styles.dots}>
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`리뷰 ${index + 1}`}
                        />
                    ))}
                </div>

                <div className={styles.moreReviews}>
                    <a
                        href="https://map.naver.com/p/entry/place/1210788398?placePath=/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        네이버에서 더 많은 후기 보기
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
