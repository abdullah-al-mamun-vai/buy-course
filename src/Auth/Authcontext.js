import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

export const UserContext = createContext();

const provider = new GoogleAuthProvider()


const auth = getAuth(app)
const Authcontext = ({ children }) => {
    const [user, setUser] = useState(null)

    const handleRegister = (gmail, password) => {
        return createUserWithEmailAndPassword(auth, gmail, password);
    }
    const handleLogin = (gmail, password) => {
        return signInWithEmailAndPassword(auth, gmail, password)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {

        }).catch(error => console.log(error))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, []);
    const handleGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            console.log(user)
        })
            .catch(error => { const er = error })
    }
    const info = { handleRegister, handleLogin, handleLogout, handleGoogle }
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default Authcontext;