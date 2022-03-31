import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDze--PunM-dVpRQjRyEKv7rkybLc0QmRc",
    authDomain: "fir-react-f506a.firebaseapp.com",
    projectId: "fir-react-f506a",
    storageBucket: "fir-react-f506a.appspot.com",
    messagingSenderId: "874935263023",
    appId: "1:874935263023:web:aa403f9bf687d2d6ebcbda"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();