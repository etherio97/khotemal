import admin from "firebase-admin";

const {
  GOOGLE_APPLICATION_CREDENTIALS,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET
} = process.env;

// process.env.GOOGLE_APPLICATION_CREDENTIALS = `${process.cwd()}/${GOOGLE_APPLICATION_CREDENTIALS}`;

export default function() {
  if (admin.apps.length) return admin.apps[0];
  return admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://dota-khotemal-default-rtdb.firebaseio.com",
    storageBucket: "dota-khotemal.appspot.com"
  });
}
