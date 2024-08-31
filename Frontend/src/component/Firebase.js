import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCR9GN7p-BBNu-JvuBWZ1-gspYptSEi7WQ',
	authDomain: 'farmer-contract-login.firebaseapp.com',
	projectId: 'farmer-contract-login',
	storageBucket: 'farmer-contract-login.appspot.com',
	messagingSenderId: '324159433835',
	appId: '1:324159433835:web:59a96ca650b55addd4952e',
	measurementId: 'G-MQ44RBB1L2',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export default app;
