import styles from './FeaturesSection.module.css';

const features = [
    {
        icon: '🔒',
        title: '프라이빗 셀프촬영',
        description: '한 팀만 사용하는 공간에서 촬영, 사진 선택, 인화까지 직접 진행합니다.',
        accent: '우리끼리 편하게'
    },
    {
        icon: '👨‍👩‍👧‍👦',
        title: '가족 중심 촬영',
        description: '가족사진, 만삭사진, 아기 성장기록을 자연스럽게 남길 수 있어요.',
        accent: '가족의 속도에 맞춰'
    },
    {
        icon: '🐕',
        title: '반려동물도 가족으로',
        description: '영유아 또는 반려동물 1명은 무료로 함께 촬영할 수 있습니다.',
        accent: '함께 남기는 기록'
    },
    {
        icon: '🤍',
        title: '아이보리 배경 중심',
        description: '현재는 깔끔하고 따뜻한 아이보리 배경을 중심으로 운영합니다.',
        accent: '밝고 부드러운 무드'
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className={`section ${styles.features}`}>
            <div className="container">
                <div className="section-title">
                    <h2>왜 Studio BDAY인가요?</h2>
                    <p>가족이 편하게 머물 수 있는 프라이빗 셀프사진관입니다</p>
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
