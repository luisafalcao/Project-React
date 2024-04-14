import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpkfCEzcK9BRm7nE79rsB8QLzLjX8tO54",
    authDomain: "projeto05-69c9e.firebaseapp.com",
    projectId: "projeto05-69c9e",
    storageBucket: "projeto05-69c9e.appspot.com",
    messagingSenderId: "814167129953",
    appId: "1:814167129953:web:9c23b9acbb0ecb9a710f20"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app)

