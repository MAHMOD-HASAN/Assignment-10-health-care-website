import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA5W9AS-M2nSCspt7ta9sdrTsLCKN7VzIo",
    authDomain: "fitness-bd.firebaseapp.com",
    projectId: "fitness-bd",
    storageBucket: "fitness-bd.appspot.com",
    messagingSenderId: "602947585137",
    appId: "1:602947585137:web:f4bf66f8823793390387d0"
  };


  const firebaseInitialize = () => {
      return initializeApp(firebaseConfig);
  }

  export default firebaseInitialize;