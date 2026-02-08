import admin from 'firebase-admin';

// Export instances and debug info
let db;
let storage;
let initError = null; // Moved declaration up

// Check if Firebase Admin is already initialized to prevent re-initialization error
if (!admin.apps.length) {
    try {
        // Priority 1: Single JSON Environment Variable (User's current setup on Vercel)
        if (process.env.FIREBASE_SERVICE_ACCOUNT) {
            try {
                const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount),
                });
            } catch (parseError) {
                initError = `Parse Error: ${parseError.message}`;
                console.error('Firebase Admin JSON Parse Error:', parseError.message);
            }
        }
        // Priority 2: Individual Environment Variables
        else if (process.env.FIREBASE_PRIVATE_KEY) {
            try {
                admin.initializeApp({
                    credential: admin.credential.cert({
                        projectId: process.env.FIREBASE_PROJECT_ID,
                        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                        // Handle private key newlines correctly
                        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    }),
                });
            } catch (initErr) {
                initError = `Init Error (Individual): ${initErr.message}`;
            }
        }
        // Priority 3: No credentials found
        else {
            initError = 'No Firebase credentials found. Set FIREBASE_PRIVATE_KEY or FIREBASE_SERVICE_ACCOUNT env vars.';
            console.warn('Firebase: No credentials found. Please set environment variables.');
        }
    } catch (outerError) {
        initError = `Outer Error: ${outerError.message}`;
        console.error('Firebase Admin initialization error:', outerError);
    }
}


try {
    // If app initialized successfully, use real Firestore
    if (admin.apps.length) {
        db = admin.firestore();
        storage = admin.storage();
    } else {
        throw new Error("Firebase App not initialized (Check ENV vars or JSON format)");
    }
} catch (e) {
    initError = e.message;
    console.warn("Verify: Firebase credentials missing or invalid. Using Mock DB.");

    // Mock DB to prevent build crashes
    db = {
        collection: (name) => ({
            doc: (id) => ({
                get: async () => ({ exists: false, data: () => null }), // Always return "not found"
                set: async () => console.log('Mock DB set:', name, id),
            })
        })
    };

    // Mock Storage to prevent build crashes
    storage = {
        bucket: () => ({
            file: (path) => ({
                save: async () => console.log('Mock Storage save:', path),
                getSignedUrl: async () => ['https://mock-url.com'],
            })
        })
    };
}

export { db, storage, initError };
