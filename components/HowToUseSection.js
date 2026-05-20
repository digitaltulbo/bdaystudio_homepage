import styles from './HowToUseSection.module.css';

const steps = [
    {
        number: '01',
        icon: '🚪',
        title: '입장 및 준비',
        description: '예약 시간에 맞춰 입장 후 안내문을 확인하고 촬영을 준비합니다.'
    },
    {
        number: '02',
        icon: '📸',
        title: '셀프촬영',
        description: '리모컨으로 약 30분 동안 아이보리 배경 앞에서 직접 촬영합니다.'
    },
    {
        number: '03',
        icon: '🖼️',
        title: '사진 선택과 인화',
        description: '약 25분 동안 마음에 드는 사진을 고르고 기본 5x7 인화 3장을 직접 출력합니다.'
    },
    {
        number: '04',
        icon: '🎞️',
        title: '원본 파일 수령',
        description: '촬영 원본 전체를 무료로 받아갑니다.'
    }
];

export default function HowToUseSection() {
    return (
        <section className={`section ${styles.howToUse}`}>
            <div className="container">
                <div className="section-title">
                    <h2>이용 흐름</h2>
                    <p>총 55분 이용, 촬영 약 30분과 사진 선택 및 인화 약 25분으로 진행됩니다</p>
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
