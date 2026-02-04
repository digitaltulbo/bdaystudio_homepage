import admin from 'firebase-admin';

const serviceAccount = require('../../data/service-account.json');

if (!admin.apps.length) {
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
export const db = admin.firestore(); // Firestore 추가!
