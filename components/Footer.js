import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.main}>
                    <div className={styles.brand}>
                        <a href="#" className={styles.logo}>
                            <span className={styles.logoIcon}>📸</span>
                            <span className={styles.logoText}>Studio BDAY</span>
                        </a>
                        <p className={styles.tagline}>작가 없이, 우리끼리, 우리답게</p>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.infoGroup}>
                            <h4>연락처</h4>
                            <p>📞 0507-1433-5283</p>
                            <p>✉️ bday_yatap@naver.com</p>
                        </div>

                        <div className={styles.infoGroup}>
                            <h4>운영시간</h4>
                            <p>매일 09:00 - 21:00</p>
                            <p>연중무휴 운영</p>
                        </div>

                        <div className={styles.infoGroup}>
                            <h4>위치</h4>
                            <p>경기 성남시 분당구 장미로 101, 현대아파트 833동 앞 근린상가 2층</p>
                        </div>
                    </div>

                    <div className={styles.social}>
                        <h4>SNS</h4>
                        <div className={styles.socialLinks}>
                            <a
                                href="https://www.instagram.com/bday_yatap"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Instagram"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a
                                href="https://talk.naver.com/profile/weckh5v"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Naver TalkTalk"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3C6.5 3 2 6.58 2 11c0 2.85 1.89 5.34 4.72 6.76-.15.53-.55 1.92-.63 2.22-.1.36.13.36.28.26.12-.08 1.85-1.24 2.6-1.74.66.1 1.35.15 2.03.15 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Studio BDAY. All rights reserved.
                    </p>
                    <p className={styles.business}>
                        사업자등록번호: 497-65-00431 | 대표: 최승진
                    </p>
                </div>
            </div>
        </footer>
    );
}
