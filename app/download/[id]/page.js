import { db } from '@/lib/firebase';
import styles from './download.module.css';
import { notFound } from 'next/navigation';

// Helper function to check if URL is valid (not empty, not #)
function isValidUrl(url) {
    return url && url.trim() !== '' && url.trim() !== '#';
}

// Helper function to check if page is expired
function isExpired(expiryDate) {
    if (!expiryDate) return false;

    // Parse date in format YYYY-MM-DD or YYYY. MM. DD
    const cleanDate = expiryDate.replace(/\./g, '-').replace(/\s/g, '');
    const expiry = new Date(cleanDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return expiry < today;
}

// 서버 사이드에서 데이터 가져오기
async function getCustomerData(id) {
    if (id === 'sample') {
        return {
            customerName: '김민지',
            shootDate: '2026. 02. 04',
            expiryDate: '2026. 02. 19',
            videoUrl: '#',
            calendarUrl: '#',
            originalUrl: '#',
            retouchedUrl: '#'
        };
    }

    try {
        const doc = await db.collection('customers').doc(id).get();
        if (!doc.exists) return null;
        return doc.data();
    } catch (error) {
        console.error('DB Error:', error);
        return null;
    }
}

// Dynamic OG metadata for KakaoTalk preview
export async function generateMetadata({ params }) {
    const { id } = params;
    const data = await getCustomerData(id);

    if (!data) {
        return {
            title: '스튜디오생일',
            description: '페이지를 찾을 수 없습니다.'
        };
    }

    return {
        title: `스튜디오생일 | ${data.customerName}님의 사진`,
        description: '소중한 추억을 다운로드하세요 📸',
        openGraph: {
            title: `스튜디오생일 | ${data.customerName}님의 사진`,
            description: '소중한 추억을 다운로드하세요 📸',
            images: ['https://firebasestorage.googleapis.com/v0/b/bday-delivery.firebasestorage.app/o/og-image.jpg?alt=media'],
            type: 'website',
            siteName: '스튜디오생일',
        },
        twitter: {
            card: 'summary_large_image',
            title: `스튜디오생일 | ${data.customerName}님의 사진`,
            description: '소중한 추억을 다운로드하세요 📸',
            images: ['https://firebasestorage.googleapis.com/v0/b/bday-delivery.firebasestorage.app/o/og-image.jpg?alt=media'],
        }
    };
}

export default async function DownloadPage({ params }) {
    const { id } = params;
    const data = await getCustomerData(id);

    if (!data) {
        return notFound();
    }

    // Check if page is expired
    const expired = isExpired(data.expiryDate);

    // Show expired page message
    if (expired) {
        return (
            <div className={styles.container}>
                <div className={styles.brandHeader}>
                    <span className={styles.brandIcon}>📸</span>
                    <span className={styles.brandName}>스튜디오생일</span>
                </div>

                <div className={styles.expiredContainer}>
                    <div className={styles.expiredIcon}>⏰</div>
                    <h1 className={styles.expiredTitle}>만료된 페이지입니다</h1>
                    <p className={styles.expiredDesc}>
                        다운로드 기간이 종료되었습니다.<br />
                        사진이 필요하시면 스튜디오로 문의해 주세요.
                    </p>
                    <a href="http://pf.kakao.com/_dykYG/chat" target="_blank" rel="noreferrer" className={styles.kakaoBtn}>
                        <span className={styles.kakaoBtnIcon}>💛</span> 카카오톡으로 문의하기
                    </a>
                    <a href="tel:0507-1433-5283" className={styles.contactBtnSecondary}>
                        📞 전화로 문의하기
                    </a>
                </div>

                <footer className={styles.footer}>
                    <p>© 스튜디오생일 | 분당 야탑 셀프사진관</p>
                </footer>
            </div>
        );
    }

    // Check which URLs are valid
    const hasVideo = isValidUrl(data.videoUrl);
    const hasCalendar = isValidUrl(data.calendarUrl);
    const hasOriginal = isValidUrl(data.originalUrl);
    const hasRetouched = isValidUrl(data.retouchedUrl);

    // type 기반 텍스트 분기 (기본값: 'original')
    const pageType = data.type || 'original';
    const isRetouched = pageType === 'retouched';

    return (
        <div className={styles.container}>
            {/* 로고/브랜드 헤더 */}
            <div className={styles.brandHeader}>
                <span className={styles.brandIcon}>📸</span>
                <span className={styles.brandName}>스튜디오생일</span>
            </div>

            <header className={styles.header}>
                <h1 className={styles.title}>
                    {isRetouched
                        ? `${data.customerName}님, 보정본이 도착했어요! ✨`
                        : `${data.customerName}님, 사진이 도착했어요! 🎁`
                    }
                </h1>
                <p className={styles.subtitle}>
                    {isRetouched ? (
                        <>정성껏 보정한 사진을 준비했어요 😊<br />확인 후 수정 요청이 있으시면 편하게 말씀해주세요.</>
                    ) : (
                        <>오늘 촬영은 즐거우셨나요? 😊<br />감사한 마음을 담아 작은 선물들을 준비했어요.</>
                    )}
                </p>
            </header>

            {/* 선물 1: 영상 - only show if videoUrl exists */}
            {hasVideo && (
                <div className={styles.card}>
                    <span className={styles.giftLabel}>선물 1. 영상</span>
                    <h3 className={styles.cardTitle}>추억을 생생하게 🎥</h3>
                    <p className={styles.cardDesc}>
                        촬영하신 사진들로 예쁜 영상을 만들어봤어요.<br />
                        소중한 순간을 영상으로 간직해보세요.
                    </p>
                    <a href={data.videoUrl} className={styles.downloadBtn} download target="_blank">
                        <span className={styles.icon}>📥</span> 영상 다운로드
                    </a>
                </div>
            )}

            {/* 선물 2: 폰 배경화면 - only show if calendarUrl exists */}
            {hasCalendar && (
                <div className={styles.card}>
                    <span className={styles.giftLabel}>선물 2. 폰 배경 달력</span>
                    <h3 className={styles.cardTitle}>매일매일 보는 추억 📅</h3>
                    <p className={styles.cardDesc}>
                        폰 배경화면으로 딱 좋은 달력 이미지예요.<br />
                        매일 보면서 행복했던 오늘을 기억해주세요!
                    </p>
                    <a href={data.calendarUrl} className={styles.downloadBtn} download target="_blank">
                        <span className={styles.icon}>📥</span> 달력 이미지 다운로드
                    </a>
                </div>
            )}

            {/* 원본/보정본 다운로드 - type 기반 텍스트 분기 */}
            {(hasOriginal || hasRetouched) && (
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>
                        {isRetouched
                            ? '📁 보정본 파일'
                            : hasRetouched && hasOriginal
                                ? '📁 원본 & 보정본 파일'
                                : hasRetouched
                                    ? '📁 보정본 파일'
                                    : '📁 원본 파일'
                        }
                    </h3>
                    <p className={styles.cardDesc}>
                        {isRetouched
                            ? '보정이 완료된 사진 파일입니다.'
                            : hasRetouched && hasOriginal
                                ? '촬영하신 모든 원본 파일과 예쁘게 보정된 사진입니다.'
                                : hasRetouched
                                    ? '예쁘게 보정된 사진입니다.'
                                    : '촬영하신 모든 원본 파일입니다.'
                        }
                    </p>
                    <div className={styles.buttonGroup}>
                        {hasRetouched && (
                            <a href={data.retouchedUrl} className={styles.downloadBtn} target="_blank">
                                <span className={styles.icon}>✨</span>
                                {isRetouched ? ' 보정본 다운로드 (Zip)' : ' 보정본 다운로드'}
                            </a>
                        )}
                        {hasOriginal && (
                            <a href={data.originalUrl} className={`${styles.downloadBtn} ${hasRetouched ? styles.downloadBtnSecondary : ''}`} target="_blank">
                                <span className={styles.icon}>💾</span> 원본 전체 다운로드 (Zip)
                            </a>
                        )}
                    </div>
                </div>
            )}

            <div className={styles.expiryNotice}>
                ⚠️ 이 페이지는 <strong>{data.expiryDate}</strong>까지 유효합니다.<br />
                기간 내에 꼭 저장해주세요! (이후 자동 삭제됨)
            </div>

            {/* 카카오톡 채팅 유도 */}
            <div className={styles.kakaoCard}>
                <div className={styles.kakaoHeader}>
                    <span className={styles.kakaoIcon}>💬</span>
                    <h3 className={styles.kakaoTitle}>
                        {isRetouched ? '수정 요청이 있으신가요?' : '보정 요청 · 문의는 카카오톡으로'}
                    </h3>
                </div>
                <p className={styles.kakaoDesc}>
                    {isRetouched
                        ? '보정본 확인 후 수정이 필요하시면 카카오톡으로 편하게 말씀해주세요!'
                        : '보정 요청, 추가 문의, 재촬영 예약까지 카카오톡으로 편하게 대화하세요.'
                    }
                </p>
                <a href="http://pf.kakao.com/_dykYG/chat" target="_blank" rel="noreferrer" className={styles.kakaoBtn}>
                    <span className={styles.kakaoBtnIcon}>💛</span> 카카오톡으로 대화하기
                </a>
            </div>

            <div className={styles.ctaSection}>
                {pageType === 'original' && isValidUrl(data.formUrl) && (
                    <a href={data.formUrl} target="_blank" rel="noreferrer" className={`${styles.reviewLink} ${styles.formLink}`}>
                        📝 보정 요청서 작성하기
                    </a>
                )}
                <a href="https://m.place.naver.com/my" target="_blank" rel="noreferrer" className={styles.reviewLink}>
                    ✍️ 소중한 리뷰 남기러 가기
                </a>
            </div>

            <footer className={styles.footer}>
                <p>© 스튜디오생일 | 분당 야탑 셀프사진관</p>
            </footer>
        </div>
    );
}
