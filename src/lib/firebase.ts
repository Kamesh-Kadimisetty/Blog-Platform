import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBGI_kRtcIlP68kftnpI6-iwPqHqdxymw",
  authDomain: "blog-app-3a84f.firebaseapp.com",
  projectId: "blog-app-3a84f",
  storageBucket: "blog-app-3a84f.appspot.com",
  messagingSenderId: "960575006832",
  appId: "1:960575006832:web:2bf3523b4a859607486cb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser doesn\'t support persistence.');
    } else {
      console.error('Firebase persistence error:', err);
    }
  });