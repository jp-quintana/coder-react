import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAP26Gbs7yd8ilFxZBSdbbqlaGT79DAC9A",
  authDomain: "flaakko-react.firebaseapp.com",
  projectId: "flaakko-react",
  storageBucket: "flaakko-react.appspot.com",
  messagingSenderId: "842513903206",
  appId: "1:842513903206:web:bc3c9453e2826b615807a7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
