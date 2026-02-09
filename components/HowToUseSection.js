import styles from './HowToUseSection.module.css';

const steps = [
    {
        number: '01',
        icon: '📱',
        title: '예약하기',
        description: '네이버 예약에서 원하는 날짜와 시간을 선택해 주세요.'
    },
    {
        number: '02',
        icon: '🚶',
        title: '방문하기',
        description: '예약 시간 5분 전, 문자로 안내받은 비밀번호를 입력하고 입장해 주세요.'
    },
    {
        number: '03',
        icon: '📸',
        title: '촬영하기',
        description: '프라이빗한 공간에서 우리만의 속도로 자유롭게 셔터를 눌러보세요.'
    },
    {
        number: '04',
        icon: '💌',
        title: '사진 수령',
        description: '베이직은 현장에서 바로 인화하고, 프리미엄은 보정 후 택배로 보내드려요.'
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
