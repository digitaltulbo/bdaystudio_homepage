import styles from './PricingSection.module.css';

const pricingPlans = [
    {
        name: 'Basic',
        price: '40,000',
        features: ['보정본 10장', '원본 전체 제공', '소품 무료 대여'],
        popular: false
    },
    {
        name: 'Premium',
        price: '70,000',
        features: ['원본 전체 제공', '소품 무료 대여', '2가지 컨셉', '의상 갈아입기 가능', '흑백,컬러 모두 촬영 가능'],
        popular: true
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
                                href="https://naver.me/5ssB0M3B"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${plan.popular ? styles.naverBtnPrimary : 'btn-secondary'} ${styles.planBtn}`}
                            >
                                네이버 예약
                            </a>
                        </div>
                    ))}
                </div>

                <div className={styles.hours}>
                    <div className={styles.hoursIcon}>🕐</div>
                    <h3>운영 시간</h3>
                    <p>매일 09:00 - 21:00 (마지막 입장 20:00)</p>
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
