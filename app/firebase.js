import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyARiY5rUNqq_ooIqHiluO-3MuJyXv-XnFY',
  authDomain: 'pantry-app-68109.firebaseapp.com',
  projectId: 'pantry-app-68109',
  storageBucket: 'pantry-app-68109.appspot.com',
  messagingSenderId: '784083043930',
  appId: '1:784083043930:web:7f7b42454a87d7a3a3fa63',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
