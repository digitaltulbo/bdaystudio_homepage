import styles from './ReservationSection.module.css';

export default function ReservationSection() {
    return (
        <section className={styles.reservation}>
            <div className={styles.background}>
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        특별한 순간을<br />
                        함께 만들어요
                    </h2>
                    <p className={styles.subtitle}>
                        작가 없이 우리끼리, 자유롭게 촬영하고 싶다면<br />
                        지금 바로 예약해 주세요
                    </p>
                </div>

                <div className={styles.buttons}>
                    <a
                        href="https://naver.me/5ssB0M3B"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-large ${styles.naverBtnMain}`}
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
                        className={`btn ${styles.kakaoBtn}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C6.5 3 2 6.58 2 11c0 2.85 1.89 5.34 4.72 6.76-.15.53-.55 1.92-.63 2.22-.1.36.13.36.28.26.12-.08 1.85-1.24 2.6-1.74.66.1 1.35.15 2.03.15 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
                        </svg>
                        카카오 문의
                    </a>
                </div>

                <div className={styles.contact}>
                    <p>궁금한 점이 있으시면 언제든 문의해 주세요</p>
                    <a href="tel:0507-1433-5283" className={styles.phone}>
                        <span>📞</span> 0507-1433-5283
                    </a>
                </div>
            </div>
        </section>
    );
}
