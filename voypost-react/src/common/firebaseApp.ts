import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore();

export default app;
