import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyBq8lhqzWSD6Q16SWzdoqTP17fNXPIPqMU",
    authDomain: "habitsapp-a8b10.firebaseapp.com",
    projectId: "habitsapp-a8b10",
    storageBucket: "habitsapp-a8b10.appspot.com",
    messagingSenderId: "198906565870",
    appId: "1:198906565870:web:8345fec07f8a4dde768fff",
    measurementId: "G-XVF35B33D1",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return {
    provide: {
      firebaseApp: app,
      db,
    },
  };
});
