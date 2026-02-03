import styles from './AIServicesSection.module.css';

const services = [
    {
        icon: '🎓',
        title: '졸업사진 생성기',
        description: '촬영한 사진으로 다양한 배경의 졸업사진을 AI가 만들어 드려요',
        link: '#',
        badge: 'NEW'
    },
    {
        icon: '📖',
        title: '포즈북',
        description: '어떤 포즈를 취해야 할지 고민될 때, AI가 추천하는 포즈를 참고해 보세요',
        link: '#',
        badge: '인기'
    }
];

export default function AIServicesSection() {
    return (
        <section id="ai-services" className={`section ${styles.aiServices}`}>
            <div className="container">
                <div className="section-title">
                    <h2>AI 서비스</h2>
                    <p>촬영 후 특별한 경험을 더해보세요</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            {service.badge && (
                                <span className={styles.badge}>{service.badge}</span>
                            )}
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{service.icon}</span>
                            </div>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                            <span className={styles.link}>
                                자세히 보기
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </div>

                <div className={styles.tip}>
                    <span className={styles.tipIcon}>💡</span>
                    <p>AI 서비스는 촬영 후 별도로 이용 가능해요. 촬영본으로 더 다양한 결과물을 만들어 보세요!</p>
                </div>
            </div>
        </section>
    );
}
