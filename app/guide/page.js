'use client';

import styles from './guide.module.css';

const steps = [
    {
        title: '입장 및 준비',
        time: '예약 시간',
        desc: '예약 시간에 맞춰 입장 후 안내문을 확인하고 리모컨과 촬영 위치를 확인해 주세요.'
    },
    {
        title: '셀프촬영',
        time: '약 30분',
        desc: '아이보리 배경 앞에서 리모컨으로 직접 촬영합니다. 카메라와 조명은 임의로 조작하지 말아 주세요.'
    },
    {
        title: '사진 선택',
        time: '선택',
        desc: '마음에 드는 사진을 고릅니다. 기본 5x7 인화 3장이 포함되어 있습니다.'
    },
    {
        title: '인화',
        time: '약 25분 안에 진행',
        desc: '사진 선택과 인화를 고객님이 직접 진행합니다. 추가 인화는 1장 2,000원입니다.'
    },
    {
        title: '원본 파일 수령',
        time: '무료',
        desc: '촬영 원본 전체를 무료로 받아갑니다.'
    }
];

const options = [
    '추가 인원 1인 10,000원',
    '9컷 모바일 이미지 20,000원 (인화 없이 파일 제공)',
    '헬륨 풍선 패키지 20,000원 (마카롱 헬륨 풍선만 운영, 최소 4일 전 예약 필수)',
    '5x7 나무 액자 추가 10,000원',
    '사진 추가 인화 1장 2,000원'
];

export default function GuidePage() {
    return (
        <div className={styles.container}>
            <div className={styles.brandHeader}>
                <span className={styles.brandIcon}>📸</span>
                <span className={styles.brandName}>스튜디오생일</span>
            </div>

            <h1 className={styles.pageTitle}>촬영 매뉴얼</h1>

            <div className={styles.infoBox}>
                프라이빗 셀프촬영 40,000원<br />
                총 55분 이용 · 촬영 약 30분 · 사진 선택과 인화 약 25분
            </div>

            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <div className={styles.stepCard} key={step.title}>
                        <div className={styles.stepNumber}>{index + 1}</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <span className={styles.stepTime}>{step.time}</span>
                            </div>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.tipsSection}>
                <h2 className={styles.sectionTitle}>포함 사항</h2>
                <ul className={styles.tipsList}>
                    <li>성인 2인 기준</li>
                    <li>영유아 또는 반려동물 1명 무료 추가</li>
                    <li>5x7 인화 3장 포함</li>
                    <li>원본 전체 무료 제공</li>
                    <li>아이보리 배경 중심 운영</li>
                </ul>
            </div>

            <div className={styles.tipsSection}>
                <h2 className={styles.sectionTitle}>추가 옵션</h2>
                <ul className={styles.tipsList}>
                    {options.map((option) => (
                        <li key={option}>{option}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.warningSection}>
                <h2 className={styles.sectionTitle}>주의사항</h2>
                <ul className={styles.warningList}>
                    <li>
                        <strong>직접 이용</strong><br />
                        촬영, 사진 선택, 인화는 고객님이 직접 진행합니다.
                    </li>
                    <li>
                        <strong>촬영 불가 항목</strong><br />
                        여권사진, 증명사진, 신분증 사진 촬영은 불가합니다.
                    </li>
                    <li>
                        <strong>장비 조작 금지</strong><br />
                        카메라 구도, 줌, 조명 등 장비를 임의로 조작하지 말아 주세요.
                    </li>
                    <li>
                        <strong>반려동물 동반</strong><br />
                        보호자가 안전하게 케어해 주세요. 오염이나 파손이 생기면 바로 알려주세요.
                    </li>
                </ul>
            </div>

            <div className={styles.locationSection}>
                <h2 className={styles.sectionTitle}>위치 안내</h2>
                <ul className={styles.locationList}>
                    <li>
                        <strong>주소</strong><br />
                        경기 성남시 분당구 장미로 101, 현대아파트 833동 앞 근린상가 2층
                    </li>
                    <li>
                        <strong>오시는 길</strong><br />
                        야탑역 4번 출구 도보 약 7분<br />
                        장미마을 정류장 하차 시 도보 약 2분
                    </li>
                    <li>
                        <strong>주차</strong><br />
                        상가 앞 또는 단지 내 빈 곳에 주차 가능합니다. 방문증을 차량 전면에 놓아주세요.
                    </li>
                </ul>
            </div>

            <div className={styles.contactSection}>
                <p className={styles.contactText}>궁금한 점이 있으신가요?</p>
                <a
                    href="https://talk.naver.com/profile/weckh5v"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactBtn}
                >
                    네이버톡톡 문의
                </a>
            </div>

            <footer className={styles.footer}>
                <p>© 스튜디오생일 | 분당 야탑 프라이빗 셀프사진관</p>
            </footer>
        </div>
    );
}
