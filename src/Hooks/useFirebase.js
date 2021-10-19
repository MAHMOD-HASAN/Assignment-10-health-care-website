import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInitialize from '../Firebase/ConfigAndInit';

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

     // sign in using google provider
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
    }

    // Obserbe user state change is the browser tab
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
          
        });

    }, []);

    
     // logOut function
     const logOut = () => {
        signOut(auth)
            .then(() => { })
     }

    return {
        user,
        signInUsingGoogle,
        logOut,
    }
};

export default useFirebase;