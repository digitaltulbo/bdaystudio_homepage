import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.overlay}></div>
                <div className={styles.pattern}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.badges}>
                    <div className={styles.badge}>
                        <span>🎀</span> 프라이빗 셀프촬영 40,000원
                    </div>
                    <div className={styles.badgeHighlight}>
                        <span>⭐</span> 총 55분 · 원본 전체 무료 제공
                    </div>
                </div>

                <h1 className={styles.title}>
                    스튜디오생일<br />
                    <span className={styles.highlight}>Studio BDAY</span>
                </h1>

                <p className={styles.subtitle}>
                    가족, 아이, 반려동물까지<br />
                    우리끼리 편하게 남기는 셀프사진
                </p>

                <div className={styles.cta}>
                    <a
                        href="https://naver.me/5ssB0M3B"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${styles.naverBtn} btn-large ${styles.ctaBtn}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                        </svg>
                        네이버 예약하기
                    </a>
                    <a
                        href="https://talk.naver.com/profile/weckh5v"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${styles.ctaBtn}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C6.5 3 2 6.58 2 11c0 2.85 1.89 5.34 4.72 6.76-.15.53-.55 1.92-.63 2.22-.1.36.13.36.28.26.12-.08 1.85-1.24 2.6-1.74.66.1 1.35.15 2.03.15 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
                        </svg>
                        네이버톡톡 문의
                    </a>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>🖼️</span>
                        <span>5x7 인화 3장 포함</span>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>🎞️</span>
                        <span>원본 전체 무료 제공</span>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>👶</span>
                        <span>영유아 또는 반려동물 1명 무료</span>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>🤍</span>
                        <span>아이보리 배경 중심</span>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>스크롤</span>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel}></div>
                </div>
            </div>
        </section>
    );
}
