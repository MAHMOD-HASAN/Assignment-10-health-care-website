import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/ConfigAndInit";

firebaseInitialize();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
     const auth = getAuth();

     const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
       
     }


// observed user state change
     useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }else {
                setUser({})
            }
        });
     }, [])

     const logOut = () => {
         signOut(auth)
         .then(() => {
             setUser({});
         })
     }

     return {
         user,
         signInUsingGoogle,
         logOut,
     }
     
}

export default useFirebase;