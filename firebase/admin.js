var admin = require('firebase-admin');

var serviceAccount = require('./firebase-keys.json');

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://birdev-8f5bb.firebaseio.com',
    });
} catch (error) {
    console.log(error);
}

export const firestore = admin.firestore();
