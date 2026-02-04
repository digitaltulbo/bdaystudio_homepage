import admin from 'firebase-admin';

// Vercel 환경 변수에서 JSON 문자열을 가져옴
const serviceAccountStr = process.env.FIREBASE_SERVICE_ACCOUNT;

// 만약 환경 변수가 없으면 (로컬 개발용) 파일에서 시도
let serviceAccount;
try {
    if (serviceAccountStr) {
        serviceAccount = JSON.parse(serviceAccountStr);
    } else {
        serviceAccount = require('../../data/service-account.json');
    }
} catch (e) {
    console.error("Firebase Service Account Load Error", e);
}

if (!admin.apps.length && serviceAccount) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: 'bday-delivery.firebasestorage.app'
    });
    console.log('Firebase Admin Initialized');
  } catch (error) {
    console.error('Firebase Admin Init Error:', error);
  }
}

export const storage = admin.storage();
export const db = admin.firestore();
