import styles from './TargetCustomersSection.module.css';

const targetGroups = [
    {
        icon: '💒',
        title: '하객룩 촬영하시는 분',
        description: '라온제나 분당에서 도보 7분! 결혼식 전후로 간편하게 방문해서 예쁜 하객룩 사진 남겨가세요.',
        badge: '인기',
        highlight: true
    },
    {
        icon: '👨‍👩‍👧‍👦',
        title: '자연스러운 가족사진 원하시는 분',
        description: '아이들이 놀 수 있는 공간과 장난감이 있어요. 낮가림 심한 아이도 편안하게 촬영할 수 있어요.',
        badge: null,
        highlight: false
    },
    {
        icon: '🤰',
        title: '만삭 기념사진 촬영하시는 분',
        description: '만삭 촬영용 의상 무료 대여! 프라이빗하게 편안한 분위기에서 소중한 순간을 담아보세요.',
        badge: null,
        highlight: false
    },
    {
        icon: '🐕',
        title: '반려견과 함께 추억 남기실 분',
        description: '다른 스튜디오에서 거절당하셨나요? 저희는 반려동물 촬영 추가요금 없이 환영해요!',
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
                    <h2>이런 분들께 추천드려요</h2>
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
                        어떤 촬영이든 편하게 문의주세요. 친절하게 안내해 드릴게요!
                    </p>
                </div>
            </div>
        </section>
    );
}
