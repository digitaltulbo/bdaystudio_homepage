import styles from './TargetCustomersSection.module.css';

const targetGroups = [
    {
        icon: '👨‍👩‍👧‍👦',
        title: '자연스러운 가족사진 원하시는 분',
        description: '작가의 시선 없이 우리 가족끼리 편하게 웃고 움직이며 자연스러운 사진을 남겨보세요.',
        badge: '인기',
        highlight: true
    },
    {
        icon: '🤰',
        title: '만삭사진을 편하게 남기고 싶은 분',
        description: '부담 없는 프라이빗 공간에서 출산 전의 소중한 모습을 우리 가족답게 기록하세요.',
        badge: null,
        highlight: false
    },
    {
        icon: '👶',
        title: '아기 성장기록을 남기고 싶은 분',
        description: '백일, 돌, 생일처럼 금방 지나가는 순간을 아이 컨디션에 맞춰 천천히 담아보세요.',
        badge: null,
        highlight: false
    },
    {
        icon: '🐕',
        title: '반려동물과 함께 추억 남기실 분',
        description: '반려동물도 가족으로 함께 남길 수 있습니다. 영유아 또는 반려동물 1명은 무료 추가됩니다.',
        badge: 'WELCOME',
        highlight: false
    },
    {
        icon: '👫',
        title: '커플/우정 사진 원하시는 분',
        description: '작가 없이 둘만의 시간! 눈치 보지 않고 자유롭게 다양한 포즈로 촬영해 보세요.',
        badge: null,
        highlight: false
    },
    {
        icon: '🎂',
        title: '생일/기념일 촬영하시는 분',
        description: '생일 촬영 소품 완비! 케이크, 풍선, 꼬깔모자 등 다양한 소품으로 특별한 날을 기록하세요.',
        badge: null,
        highlight: false
    }
];

export default function TargetCustomersSection() {
    return (
        <section className={`section ${styles.targetCustomers}`}>
            <div className="container">
                <div className="section-title">
                    <h2>추천 촬영</h2>
                    <p>당신에게 딱 맞는 촬영 공간, 스튜디오생일</p>
                </div>

                <div className={styles.grid}>
                    {targetGroups.map((group, index) => (
                        <div 
                            key={index} 
                            className={`${styles.card} ${group.highlight ? styles.highlighted : ''}`}
                        >
                            {group.badge && (
                                <span className={styles.badge}>{group.badge}</span>
                            )}
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{group.icon}</span>
                            </div>
                            <h3 className={styles.title}>{group.title}</h3>
                            <p className={styles.description}>{group.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <p className={styles.ctaText}>
                        <span className={styles.ctaEmoji}>💡</span>
                        촬영 전 궁금한 점은 네이버톡톡으로 편하게 문의해 주세요.
                    </p>
                </div>
            </div>
        </section>
    );
}
