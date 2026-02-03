import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.overlay}></div>
                <div className={styles.pattern}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.badge}>
                    <span>🎀</span> 프라이빗 셀프 스튜디오
                </div>

                <h1 className={styles.title}>
                    작가 없이,<br />
                    우리끼리,<br />
                    <span className={styles.highlight}>우리답게</span>
                </h1>

                <p className={styles.subtitle}>
                    눈치 보지 않고 자유롭게, 가장 자연스러운 우리의 모습을 담아보세요.<br />
                    반려견과 함께해도 괜찮아요.
                </p>

                <div className={styles.cta}>
                    <a
                        href="https://pf.kakao.com/_example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-kakao btn-large ${styles.ctaBtn}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C6.5 3 2 6.58 2 11c0 2.85 1.89 5.34 4.72 6.76-.15.53-.55 1.92-.63 2.22-.1.36.13.36.28.26.12-.08 1.85-1.24 2.6-1.74.66.1 1.35.15 2.03.15 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
                        </svg>
                        카카오로 예약하기
                    </a>
                    <a href="#gallery" className={`btn btn-secondary ${styles.ctaBtn}`}>
                        포트폴리오 보기
                    </a>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>🐕</span>
                        <span>반려견 동반 가능</span>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>💒</span>
                        <span>결혼식장 도보 3분</span>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon}>👶</span>
                        <span>전 연령대 환영</span>
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
