var admin = require('firebase-admin');

try {
    admin.initializeApp({
        credential: admin.credential.cert(
            JSON.parse(process.env.local.FIREBASE_KEYS)
        ),
        databaseURL: process.env.local.FIREBASE_DATABASE_URL,
    });
} catch (error) {
    console.log(error);
}

export const firestore = admin.firestore();
