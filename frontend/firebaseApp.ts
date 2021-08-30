import firebase from 'firebase/app';

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

interface FirebaseClientResult {
  firebase: any;
  db: firebase.firestore.Firestore;
  storage: firebase.storage.Storage;
  functions: firebase.functions.Functions;
}

const getFirebaseClient = async (): Promise<FirebaseClientResult> => {
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
  const functions = await import('firebase/functions')
    .then(() => {
      if(firebase)
        return firebase.functions();
    });
  return { firebase, db, storage, functions };
};

export default getFirebaseClient;
