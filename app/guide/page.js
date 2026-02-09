'use client';

import { useState } from 'react';
import styles from './guide.module.css';

export default function GuidePage() {
    const [activeTab, setActiveTab] = useState('basic'); // 'basic' or 'premium'

    return (
        <div className={styles.container}>
            {/* 로고/브랜드 헤더 */}
            <div className={styles.brandHeader}>
                <span className={styles.brandIcon}>📸</span>
                <span className={styles.brandName}>스튜디오생일</span>
            </div>

            <h1 className={styles.pageTitle}>이용 안내</h1>

            {/* 탭 네비게이션 */}
            <div className={styles.tabNav}>
                <button
                    className={`${styles.tabBtn} ${activeTab === 'basic' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('basic')}
                >
                    베이직
                </button>
                <button
                    className={`${styles.tabBtn} ${activeTab === 'premium' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('premium')}
                >
                    프리미엄
                </button>
            </div>

            {/* 베이직 이용순서 */}
            {activeTab === 'basic' && (
                <div className={styles.stepsContainer}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>1</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>입장</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                비밀번호를 입력하여 입장해 주세요.<br />
                                예약 시간 5분 전부터 입장 가능합니다.
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>2</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>촬영</h3>
                                <span className={styles.stepTime}>30분</span>
                            </div>
                            <p className={styles.stepDesc}>
                                안내문에 적힌 대로 촬영 세팅<br />
                                (PC와 태블릿PC 이용)
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>3</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>셀렉 및 인화</h3>
                                <span className={styles.stepTime}>30분</span>
                            </div>
                            <p className={styles.stepDesc}>
                                촬영이 끝나면 인화할 사진을 고르고 출력합니다.<br />
                                이용 인원수만큼 인화 가능 (예: 2인 예약 시 3장)
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>4</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>내보내기</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                화면의 "내보내기" 버튼을 눌러주세요.<br />
                                원본 사진은 네이버 리뷰 작성 후 카카오톡으로 전달됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 프리미엄 이용순서 */}
            {activeTab === 'premium' && (
                <div className={styles.stepsContainer}>
                    <div className={styles.infoBox}>
                        베이직과 동일한 셀프촬영입니다.<br />
                        현장에서 내보내기/인화 없이 촬영에만 집중!
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>1</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>입장</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                비밀번호를 입력하여 입장해 주세요.<br />
                                예약 시간 5분 전부터 입장 가능합니다.
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>2</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>촬영</h3>
                                <span className={styles.stepTime}>55분</span>
                            </div>
                            <p className={styles.stepDesc}>
                                안내문에 적힌 대로 촬영을 진행합니다.<br />
                                (촬영 55분 + 정리 5분)
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>3</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>원본 전달</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                귀가 후 다운로드 링크를<br />
                                카카오 알림톡으로 전달해 드립니다.
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>4</div>
                        <div className={styles.stepContent}>
                            <div className={styles.stepHeader}>
                                <h3 className={styles.stepTitle}>보정 및 배송</h3>
                            </div>
                            <p className={styles.stepDesc}>
                                보정 신청서 작성 → 보정 사진 + 액자 패키징 → 택배 발송
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 촬영 꿀팁 섹션 */}
            <div className={styles.tipsSection}>
                <h2 className={styles.sectionTitle}>📸 촬영 꿀팁</h2>
                <ul className={styles.tipsList}>
                    <li>카메라 시선을 맞춰주세요</li>
                    <li>배경지는 바닥 전체에 깔아야 예뻐요</li>
                    <li>가운데 표시선에 맞춰 서주세요</li>
                    <li>머리 위 공간은 넉넉하게!</li>
                </ul>
                <a
                    href="https://studio.bdayyatap.work/photo/mo/sharing/YnVLkdg5n"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.tipsLink}
                >
                    👉 포즈 가이드 보러가기
                </a>
            </div>

            {/* 주의사항 섹션 */}
            <div className={styles.warningSection}>
                <h2 className={styles.sectionTitle}>⚠️ 주의사항</h2>
                <ul className={styles.warningList}>
                    <li>
                        <strong>⏰ 시간 엄수</strong><br />
                        종료 시간 이후 다음 팀을 위해 시스템이 자동 종료됩니다.<br />
                        지각 시 이용 시간이 단축됩니다.
                    </li>
                    <li>
                        <strong>🪟 유리벽 주의</strong><br />
                        복도 쪽 커튼 뒤는 유리입니다. 기대지 마세요.<br />
                        (안전사고 책임은 보호자에게 있습니다)
                    </li>
                    <li>
                        <strong>🧹 소품 정리</strong><br />
                        소품/배경지 사용 후 원래 자리에 정리해 주세요.
                    </li>
                    <li>
                        <strong>👟 실내화 착용</strong><br />
                        깨끗한 스튜디오 유지를 위해 실내화를 신어주세요.
                    </li>
                    <li>
                        <strong>🐕 반려동물</strong><br />
                        배변 패드 필수 지참, 매너벨트 착용 권장<br />
                        러그 오염 시 청소비(1만원) 발생
                    </li>
                    <li>
                        <strong>📷 카메라 조작 금지</strong><br />
                        카메라 구도/줌 등 조작을 하지 말아주세요. 다음 고객님께 피해가 갑니다.
                    </li>
                </ul>
            </div>

            {/* 위치 안내 섹션 */}
            <div className={styles.locationSection}>
                <h2 className={styles.sectionTitle}>📍 위치 안내</h2>
                <ul className={styles.locationList}>
                    <li>
                        <strong>주소</strong><br />
                        성남시 분당구 야탑동 장미로101 833동 앞 근린상가 2층
                    </li>
                    <li>
                        <strong>길찾기</strong><br />
                        네이버/티맵에서 &apos;스튜디오생일&apos; 상호명으로 검색<br />
                        <span className={styles.locationNote}>(도로명 주소로 검색하면 엉뚱한 곳으로 안내될 수 있음)</span>
                    </li>
                    <li>
                        <strong>주차</strong><br />
                        상가 앞 또는 단지 내 빈 곳<br />
                        입구에 비치된 방문증 차량 전면에 필수 비치<br />
                        <span className={styles.locationNote}>(미비치 시 주차단속)</span>
                    </li>
                    <li>
                        <strong>차단기 문제 시</strong><br />
                        031-602-2015
                    </li>
                    <li>
                        <strong>비상연락처</strong><br />
                        010-2132-5282
                    </li>
                </ul>
            </div>

            {/* 문의 섹션 */}
            <div className={styles.contactSection}>
                <p className={styles.contactText}>궁금한 점이 있으신가요?</p>
                <a
                    href="https://talk.naver.com/profile/weckh5v"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactBtn}
                >
                    💬 네이버 톡톡으로 문의하기
                </a>
            </div>

            {/* 푸터 */}
            <footer className={styles.footer}>
                <p>© 스튜디오생일 | 분당 야탑 셀프사진관</p>
            </footer>
        </div>
    );
}
