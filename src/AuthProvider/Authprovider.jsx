/* eslint-disable react-hooks/rules-of-hooks */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const Google_provider = new GoogleAuthProvider();
export const authContext = createContext(null)


const Authprovider = ({ children }) => {
    const [loader, useLoader] = useState(true)
    const [user, setUser] = useState('')
    // creating user
    const createUser = (email, password) => {
        useLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // using google, github
    const googleReg = () => {
        useLoader(true)
        return signInWithPopup(auth, Google_provider)

    }

    // login 
    const userLogin = (email, password) => {
        useLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth);
    }


    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, cuser => {
            console.log(cuser)
            setUser(cuser)
        })
        return () => { unSubscribe() }

    }
        , [])

    const authInfo = { createUser, googleReg, userLogin, logout, loader, user }
    return (

        <authContext.Provider value={authInfo}>
            {
                children
            }
        </authContext.Provider>


    );
};

export default Authprovider;