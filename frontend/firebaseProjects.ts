import * as admin from 'firebase-admin';
import firebase from 'firebase/app';

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

interface FirebaseClientResult {
  firebase: any;
  db: firebase.firestore.Firestore;
  storage: firebase.storage.Storage;
}

export const getFirebaseProjectsClient = async (): Promise<FirebaseClientResult> => {
  const firebase = await import('firebase/app')
    .then((res) => {
      const fire = res.default
      if (!fire.apps.length) {
        fire.initializeApp(clientCredentials);
      }
      return fire
    })
    .catch((error) => {
      console.log(error)
    });
  const db = await import('firebase/firestore')
    .then(() => {
      if(firebase)
        return firebase.firestore()
    });
  const storage = await import('firebase/storage')
    .then(() => {
      if(firebase)
        return firebase.storage()
    });
  return { firebase, db, storage };
};

//export default getFirebaseProjectsClient;

export const getFirebaseProjectsAdmin = async () => {
  const serviceAccount = require('../../app-justo-dev-a0e08f4a58db.json');
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: 'app-justo-dev.appspot.com'
    });
  }
  return admin.storage().bucket();
};