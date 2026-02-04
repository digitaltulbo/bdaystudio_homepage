'use client';

import { useEffect, useState } from 'react';
import styles from './download.module.css';

export default function DownloadPage({ params }) {
    // 실제로는 API에서 데이터를 가져와야 하지만, 지금은 샘플 데이터로 처리
    const { id } = params;
    const [data, setData] = useState(null);

    useEffect(() => {
        // 샘플 데이터 (나중에는 서버 연동)
        if (id === 'sample') {
            setData({
                customerName: '김민지',
                shootDate: '2026. 02. 04',
                expiryDate: '2026. 02. 19', // +15일
                videoUrl: '#',
                calendarUrl: '#',
                originalUrl: '#',
                retouchedUrl: '#'
            });
        }
    }, [id]);

    if (!data) {
        return <div className={styles.container}><p style={{textAlign: 'center', marginTop: '2rem'}}>데이터를 불러오는 중입니다...</p></div>;
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{data.customerName}님, 사진이 도착했어요! 🎁</h1>
                <p className={styles.subtitle}>
                    오늘 촬영은 즐거우셨나요? 😊<br/>
                    감사한 마음을 담아 작은 선물들을 준비했어요.
                </p>
            </header>

            {/* 선물 1: 영상 */}
            <div className={styles.card}>
                <span className={styles.giftLabel}>선물 1. 영상</span>
                <h3 className={styles.cardTitle}>추억을 생생하게 🎥</h3>
                <p className={styles.cardDesc}>
                    촬영하신 사진들로 예쁜 영상을 만들어봤어요.<br/>
                    소중한 순간을 영상으로 간직해보세요.
                </p>
                <a href={data.videoUrl} className={styles.downloadBtn} download>
                    <span className={styles.icon}>📥</span> 영상 다운로드
                </a>
            </div>

            {/* 선물 2: 폰 배경화면 */}
            <div className={styles.card}>
                <span className={styles.giftLabel}>선물 2. 폰 배경 달력</span>
                <h3 className={styles.cardTitle}>매일매일 보는 추억 📅</h3>
                <p className={styles.cardDesc}>
                    폰 배경화면으로 딱 좋은 달력 이미지예요.<br/>
                    매일 보면서 행복했던 오늘을 기억해주세요!
                </p>
                <a href={data.calendarUrl} className={styles.downloadBtn} download>
                    <span className={styles.icon}>📥</span> 달력 이미지 다운로드
                </a>
            </div>

            {/* 원본/보정본 다운로드 */}
            <div className={styles.card}>
                <h3 className={styles.cardTitle}>📁 원본 & 보정본 파일</h3>
                <p className={styles.cardDesc}>
                    촬영하신 모든 원본 파일과 예쁘게 보정된 사진입니다.
                </p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <a href={data.retouchedUrl} className={styles.downloadBtn}>
                        <span className={styles.icon}>✨</span> 보정본 다운로드
                    </a>
                    <a href={data.originalUrl} className={`${styles.downloadBtn} ${styles.downloadBtnSecondary}`}>
                        <span className={styles.icon}>💾</span> 원본 전체 다운로드 (Zip)
                    </a>
                </div>
            </div>

            <div className={styles.expiryNotice}>
                ⚠️ 다운로드는 <strong>{data.expiryDate}</strong>까지만 가능합니다.<br/>
                기간 내에 꼭 저장해주세요! (이후 자동 삭제됨)
            </div>

            <div className={styles.ctaSection}>
                <a href="https://m.place.naver.com/place/9899194/review/visitor" target="_blank" rel="noreferrer" className={styles.reviewLink}>
                    ✍️ 소중한 리뷰 남기러 가기
                </a>
            </div>
        </div>
    );
}
