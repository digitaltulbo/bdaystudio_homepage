import styles from './HowToUseSection.module.css';

const steps = [
    {
        number: '01',
        icon: '📱',
        title: '예약하기',
        description: '카카오 채널에서 원하는 날짜와 시간을 선택해 예약해 주세요'
    },
    {
        number: '02',
        icon: '🚶',
        title: '방문하기',
        description: '예약 시간 10분 전까지 스튜디오에 도착해 주세요'
    },
    {
        number: '03',
        icon: '📸',
        title: '촬영하기',
        description: '준비된 소품과 함께 자유롭게 촬영을 즐겨주세요'
    },
    {
        number: '04',
        icon: '💌',
        title: '사진 수령',
        description: '촬영 당일 카카오톡으로 보정본과 원본을 전송해 드려요'
    }
];

export default function HowToUseSection() {
    return (
        <section className={`section ${styles.howToUse}`}>
            <div className="container">
                <div className="section-title">
                    <h2>이용 방법</h2>
                    <p>간편한 4단계로 특별한 추억을 만들어 보세요</p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className={styles.connector}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
