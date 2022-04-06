import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhpM59Ps83I0mCvnqWquo7cZVp8-93pq0",
    authDomain: "garbage-monitoring-syste-27d2d.firebaseapp.com",
    databaseURL: "https://garbage-monitoring-syste-27d2d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "garbage-monitoring-syste-27d2d",
    storageBucket: "garbage-monitoring-syste-27d2d.appspot.com",
    messagingSenderId: "504136853436",
    appId: "1:504136853436:web:4fc8ea6fa02fcdad1e6db9",
    measurementId: "G-R7BP0DLK32"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();