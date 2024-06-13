import { initializeApp } from 'firebase/app';
import { getFirestore, FieldValue } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-Zi-gKMYEp__Avga3qi_cl6oQf4q1eIg',
  authDomain: 'social-instagram-demo.firebaseapp.com',
  projectId: 'social-instagram-demo',
  storageBucket: 'social-instagram-demo.appspot.com',
  messagingSenderId: '1099132255219',
  appId: '1:1099132255219:web:3385332d20f090418a3086'
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore, FieldValue };
