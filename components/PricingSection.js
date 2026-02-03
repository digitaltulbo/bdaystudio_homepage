import styles from './PricingSection.module.css';

const pricingPlans = [
    {
        name: 'Basic',
        duration: '15분',
        price: '15,000',
        persons: '1~2인',
        features: ['보정본 10장', '원본 전체 제공', '소품 무료 대여'],
        popular: false
    },
    {
        name: 'Standard',
        duration: '30분',
        price: '25,000',
        persons: '1~4인',
        features: ['보정본 20장', '원본 전체 제공', '소품 무료 대여', '추가 컨셉 선택'],
        popular: true
    },
    {
        name: 'Premium',
        duration: '60분',
        price: '45,000',
        persons: '1~6인',
        features: ['보정본 40장', '원본 전체 제공', '소품 무료 대여', '2가지 컨셉', '의상 갈아입기 가능'],
        popular: false
    }
];

const notices = [
    '반려견 동반 시 추가 요금 없이 이용 가능해요',
    '영유아(24개월 이하)는 인원에서 제외돼요',
    '예약 시간 10분 전까지 도착해 주세요',
    '노쇼 시 다음 예약이 제한될 수 있어요',
    '촬영본은 카카오톡으로 당일 전송돼요'
];

export default function PricingSection() {
    return (
        <section id="pricing" className={`section ${styles.pricing}`}>
            <div className="container">
                <div className="section-title">
                    <h2>이용 안내</h2>
                    <p>합리적인 가격으로 특별한 추억을 만들어 보세요</p>
                </div>

                <div className={styles.plans}>
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`${styles.plan} ${plan.popular ? styles.popular : ''}`}>
                            {plan.popular && <div className={styles.badge}>인기</div>}
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <div className={styles.duration}>
                                <span className={styles.time}>{plan.duration}</span>
                                <span className={styles.persons}>{plan.persons}</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                <span className={styles.currency}>₩</span>
                                <span className={styles.price}>{plan.price}</span>
                            </div>
                            <ul className={styles.features}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.feature}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://pf.kakao.com/_example"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} ${styles.planBtn}`}
                            >
                                예약하기
                            </a>
                        </div>
                    ))}
                </div>

                <div className={styles.hours}>
                    <div className={styles.hoursIcon}>🕐</div>
                    <h3>운영 시간</h3>
                    <p>매일 10:00 - 22:00 (마지막 입장 21:00)</p>
                    <p className={styles.hoursNote}>연중무휴 운영</p>
                </div>

                <div className={styles.notices}>
                    <h3 className={styles.noticesTitle}>
                        <span>📌</span> 알아두세요
                    </h3>
                    <ul className={styles.noticesList}>
                        {notices.map((notice, index) => (
                            <li key={index}>{notice}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
