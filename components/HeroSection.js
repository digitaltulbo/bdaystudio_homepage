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
                        <span>🎀</span> 프라이빗 셀프 스튜디오
                    </div>
                    <div className={styles.badgeHighlight}>
                        <span>⭐</span> 네이버 리뷰 250+ · 평점 4.9
                    </div>
                </div>

                <h1 className={styles.title}>
                    작가 없이,<br />
                    우리끼리,<br />
                    <span className={styles.highlight}>우리답게</span>
                </h1>

                <p className={styles.subtitle}>
                    셔터를 누르는 순간이 선물이 되는 곳.<br />
                    현장에서 바로 인화하거나, 전문가의 보정을 거쳐 택배로 받아보세요.
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
                        네이버로 예약하기
                    </a>
                    <a
                        href="http://pf.kakao.com/_dykYG/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-kakao ${styles.ctaBtn}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C6.5 3 2 6.58 2 11c0 2.85 1.89 5.34 4.72 6.76-.15.53-.55 1.92-.63 2.22-.1.36.13.36.28.26.12-.08 1.85-1.24 2.6-1.74.66.1 1.35.15 2.03.15 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
                        </svg>
                        카카오 문의
                    </a>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>🐕</span>
                        <span>반려견 동반 OK</span>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>💒</span>
                        <span>라온제나 도보 7분</span>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>🤰</span>
                        <span>만삭의상 무료대여</span>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>🚗</span>
                        <span>무료주차</span>
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
