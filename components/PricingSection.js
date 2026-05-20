import styles from './PricingSection.module.css';

const pricingPlans = [
    {
        name: '프라이빗 셀프촬영',
        price: '40,000',
        features: [
            '성인 2인 기준',
            '총 55분 이용',
            '촬영 약 30분, 사진 선택과 인화 약 25분',
            '5x7 인화 3장 포함',
            '원본 전체 무료 제공',
            '아이보리 배경 중심 운영'
        ],
        popular: true
    }
];

const addOns = [
    '추가 인원 1인 10,000원',
    '9컷 모바일 이미지 20,000원 (인화 없이 파일 제공)',
    '헬륨 풍선 패키지 20,000원 (마카롱 헬륨 풍선만 운영, 최소 4일 전 예약 필수)',
    '5x7 나무 액자 추가 10,000원',
    '사진 추가 인화 1장 2,000원'
];

const notices = [
    '영유아 또는 반려동물 1명은 무료로 추가됩니다',
    '촬영, 사진 선택, 인화는 고객님이 직접 진행합니다',
    '여권사진, 증명사진, 신분증 사진 촬영은 불가합니다',
    '카메라와 조명 장비는 임의로 조작하지 말아 주세요'
];

export default function PricingSection() {
    return (
        <section id="pricing" className={`section ${styles.pricing}`}>
            <div className="container">
                <div className="section-title">
                    <h2>이용 안내</h2>
                    <p>단일 상품과 필요한 옵션만 투명하게 안내합니다</p>
                </div>

                <div className={styles.plans}>
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`${styles.plan} ${plan.popular ? styles.popular : ''}`}>
                            {plan.popular && <div className={styles.badge}>단일 상품</div>}
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
                                className={`btn ${styles.naverBtnPrimary} ${styles.planBtn}`}
                            >
                                네이버 예약하기
                            </a>
                        </div>
                    ))}
                </div>

                <div className={styles.notices}>
                    <h3 className={styles.noticesTitle}>
                        <span>➕</span> 추가 옵션
                    </h3>
                    <ul className={styles.noticesList}>
                        {addOns.map((notice, index) => (
                            <li key={index}>{notice}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.hours}>
                    <div className={styles.hoursIcon}>🕐</div>
                    <h3>운영 시간</h3>
                    <p>매일 09:00 - 21:00 (마지막 입장 20:00)</p>
                    <p className={styles.hoursNote}>연중무휴 운영</p>
                </div>

                <div className={styles.notices}>
                    <h3 className={styles.noticesTitle}>
                        <span>📌</span> 꼭 확인해 주세요
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
