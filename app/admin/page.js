'use client';

import { useState } from 'react';
import styles from './admin.module.css';

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [shootDate, setShootDate] = useState(new Date().toISOString().split('T')[0]);
    
    // 파일 상태
    const [videoFile, setVideoFile] = useState(null);
    const [calendarFile, setCalendarFile] = useState(null);
    const [originalFile, setOriginalFile] = useState(null);
    const [retouchedFile, setRetouchedFile] = useState(null);

    const [uploading, setUploading] = useState(false);
    const [resultLink, setResultLink] = useState('');

    const handleLogin = () => {
        if (password === 'bday1234') {
            setIsLoggedIn(true);
        } else {
            alert('비밀번호가 틀렸습니다.');
        }
    };

    const handleUpload = async () => {
        if (!customerName) return alert('고객 이름을 입력해주세요.');
        setUploading(true);

        try {
            // 1. 파일 업로드 함수
            const uploadFile = async (file, folder) => {
                if (!file) return '#';
                const formData = new FormData();
                formData.append('file', file);
                formData.append('folder', folder);
                
                const res = await fetch('/api/upload', { method: 'POST', body: formData });
                const data = await res.json();
                return data.url;
            };

            // ID 생성 (날짜 + 랜덤)
            const id = `${shootDate.replace(/-/g, '')}-${Math.random().toString(36).substr(2, 5)}`;
            const folderName = `${id}_${customerName}`;

            // 병렬 업로드 시작
            const [videoUrl, calendarUrl, originalUrl, retouchedUrl] = await Promise.all([
                uploadFile(videoFile, folderName),
                uploadFile(calendarFile, folderName),
                uploadFile(originalFile, folderName),
                uploadFile(retouchedFile, folderName)
            ]);

            // 2. 고객 정보 저장 (JSON 업데이트 API 호출)
            const customerData = {
                id,
                customerName,
                shootDate,
                expiryDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // +15일
                videoUrl,
                calendarUrl,
                originalUrl,
                retouchedUrl
            };

            await fetch('/api/save-customer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(customerData)
            });

            setResultLink(`https://bdaystudio.store/download/${id}`);
            alert('생성 완료!');

        } catch (error) {
            console.error(error);
            alert('업로드 중 오류 발생');
        } finally {
            setUploading(false);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className={styles.container}>
                <div className={styles.loginBox}>
                    <h2>관리자 로그인</h2>
                    <input 
                        type="password" 
                        className={styles.input} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호"
                    />
                    <button className={styles.btn} onClick={handleLogin}>로그인</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2>🎁 고객 선물 페이지 생성</h2>
            
            <div className={styles.uploadSection}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>고객 이름</label>
                    <input 
                        className={styles.input} 
                        value={customerName} 
                        onChange={(e) => setCustomerName(e.target.value)} 
                        placeholder="예: 김민지"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>촬영일</label>
                    <input 
                        type="date" 
                        className={styles.input} 
                        value={shootDate} 
                        onChange={(e) => setShootDate(e.target.value)} 
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>🎥 영상 파일</label>
                    <input type="file" onChange={(e) => setVideoFile(e.target.files[0])} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>📅 달력 이미지</label>
                    <input type="file" onChange={(e) => setCalendarFile(e.target.files[0])} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>✨ 보정본 (압축파일 추천)</label>
                    <input type="file" onChange={(e) => setRetouchedFile(e.target.files[0])} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>💾 원본 전체 (Zip)</label>
                    <input type="file" onChange={(e) => setOriginalFile(e.target.files[0])} />
                </div>

                <button 
                    className={styles.btn} 
                    onClick={handleUpload} 
                    disabled={uploading}
                    style={{width: '100%', marginTop: '20px'}}
                >
                    {uploading ? '업로드 및 생성 중...' : '페이지 생성하기 ✨'}
                </button>
            </div>

            {resultLink && (
                <div className={styles.resultSection}>
                    <h3>✅ 생성 완료!</h3>
                    <p>고객님께 아래 링크를 전달하세요:</p>
                    <div className={styles.linkBox}>
                        <a href={resultLink} target="_blank" rel="noreferrer">{resultLink}</a>
                    </div>
                    <button 
                        className={styles.btn} 
                        style={{marginTop: '10px', backgroundColor: '#10b981'}}
                        onClick={() => navigator.clipboard.writeText(resultLink)}
                    >
                        링크 복사
                    </button>
                </div>
            )}
        </div>
    );
}
