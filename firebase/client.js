import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBPuTlLfztrPrhjQQaLui50paOePlkCPTA',
    authDomain: 'birdev-8f5bb.firebaseapp.com',
    databaseURL: 'https://birdev-8f5bb.firebaseio.com',
    projectId: 'birdev-8f5bb',
    storageBucket: 'birdev-8f5bb.appspot.com',
    messagingSenderId: '707947045013',
    appId: '1:707947045013:web:9c3762cac67b4d8f9b7b9c',
    measurementId: 'G-E735NTJ58J',
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const mapUserFromFirebaseAuth = user => {
    const { displayName, email, photoURL, uid } = user;

    return {
        avatar: photoURL,
        username: displayName,
        email,
        uid,
    };
};

export const onAuthStateChanged = onChange => {
    return firebase.auth().onAuthStateChanged(user => {
        const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null;
        onChange(normalizedUser);
    });
};

export const loginWithGitHub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(githubProvider);
};

export const addBirdit = ({ avatar, content, userId, username }) => {
    return db.collection('birdits').add({
        avatar,
        content,
        userId,
        username,
        createAt: firebase.firestore.Timestamp.fromDate(new Date()),
        likesCount: 0,
        sharedCount: 0,
    });
};

export const fetchLatestBirdits = () => {
    return db
        .collection('birdits')
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                const { createAt } = data;
                const date = new Date(createAt.seconds * 1000);
                const normalizedCreatedAt = new Intl.DateTimeFormat(
                    'es-ES'
                ).format(date);

                return {
                    ...data,
                    id,
                    createdAt: normalizedCreatedAt,
                };
            });
        });
};
