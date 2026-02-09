'use client';

import styles from './LocationSection.module.css';
import Image from 'next/image';

export default function LocationSection() {
    return (
        <section id="location" className={`section ${styles.location}`}>
            <div className="container">
                <div className="section-title">
                    <h2>오시는 길</h2>
                    <p>편하게 방문해 주세요</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.mapWrapper}>
                        {/* Placeholder for Kakao/Naver Map */}
                        <Image
                            src="/images/map-preview.svg"
                            alt="Studio Location Map"
                            fill
                            className={styles.mapImage}
                            style={{ objectFit: 'cover' }}
                        />
                        <div className={styles.mapOverlay}>
                            <a
                                href="https://place.map.kakao.com/499995588"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${styles.mapBtn}`}
                            >
                                카카오맵에서 보기
                            </a>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoHeader}>
                                <span className={styles.infoIcon}>📍</span>
                                <h3>주소</h3>
                            </div>
                            <p className={styles.address}>경기도 성남시 분당구 장미로 101</p>
                            <p className={styles.addressDetail}>현대아파트 833동 앞 근린상가 2층</p>
                            <button
                                className={styles.copyBtn}
                                onClick={() => navigator.clipboard.writeText('경기도 성남시 분당구 장미로 101')}
                            >
                                주소 복사
                            </button>
                        </div>

                        <div className={styles.highlight}>
                            <span className={styles.highlightIcon}>💒</span>
                            <div>
                                <p className={styles.highlightText}>라온제나 분당에서</p>
                                <p className={styles.highlightAccent}>도보 7분</p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoHeader}>
                                <span className={styles.infoIcon}>🚗</span>
                                <h3>주차 안내</h3>
                            </div>
                            <p>상가 앞 또는 단지 내 빈 곳에 주차 가능합니다.</p>
                            <p>입구에 비치된 방문증을 차량 전면에 꼭 놓아주세요.</p>
                            <p className={styles.parkingNote}>(네이버/티맵에서 &apos;스튜디오생일&apos; 검색을 권장합니다)</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoHeader}>
                                <span className={styles.infoIcon}>🚇</span>
                                <h3>대중교통</h3>
                            </div>
                            <p>야탑역 1번 출구에서 도보 10분</p>
                            <p className={styles.transitNote}>장미마을 정류장 도보 2분</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
