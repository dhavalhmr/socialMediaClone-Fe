import { initializeApp } from 'firebase/app';
import { getFirestore, FieldValue } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
const auth = getAuth(app);

// if (window.location.hostname === 'localhost') {
//   firebase.functions().useFunctionsEmulator('http://localhost:3000');
//   firebase.firestore().settings({
//     host: 'localhost:8080',
//     ssl: false
//   });
// }

// if (window.location.hostname === 'localhost') {
//   connectFirestoreEmulator(firestore, 'localhost', 8080);
//   connectAuthEmulator(auth, 'http://localhost:9099');
// }

export { app as firebase, firestore, auth, FieldValue };
