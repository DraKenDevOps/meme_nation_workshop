import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-WUI2GHwGbf4nw1PV0bOxSsHvVW1N_rI",
    authDomain: "auth-3a867.firebaseapp.com",
    projectId: "auth-3a867",
    storageBucket: "auth-3a867.appspot.com",
    messagingSenderId: "471002362251",
    appId: "1:471002362251:web:992c534f06f417cbfabf8e",
    measurementId: "G-VG9P9GN0NW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
      return unsub
    },[])
    return currentUser
};

export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signout = () => {
  return signOut(auth)
};
