import styles from './FeaturesSection.module.css';

const features = [
    {
        icon: '🔒',
        title: '프라이빗 촬영',
        description: '작가 없이 우리끼리만, 눈치 보지 않고 자유롭게 촬영할 수 있어요.',
        accent: '작가의 시선이 부담스러웠다면'
    },
    {
        icon: '🐕',
        title: '반려견 동반 가능',
        description: '소중한 가족인 반려견과 함께 특별한 추억을 남겨보세요.',
        accent: '다른 스튜디오에서 거절당했다면'
    },
    {
        icon: '💒',
        title: '결혼식장 도보거리',
        description: '하객룩 기념사진 명소! 결혼식 전후로 간편하게 방문하세요.',
        accent: '뷰티톡스웨딩 도보 3분'
    },
    {
        icon: '🤖',
        title: 'AI 서비스',
        description: '졸업사진 생성기, 포즈북 등 촬영 후 특별한 경험을 더해드려요.',
        accent: '촬영 후에도 특별하게'
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className={`section ${styles.features}`}>
            <div className="container">
                <div className="section-title">
                    <h2>왜 Studio B-day인가요?</h2>
                    <p>다른 스튜디오에서 느꼈던 불편함, 저희는 알고 있어요</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{feature.icon}</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.accent}>{feature.accent}</span>
                                <h3 className={styles.title}>{feature.title}</h3>
                                <p className={styles.description}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
