import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const UserContext = createContext();



const auth = getAuth(app)

const Authcontext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([])

    const handleRegister = (gmail, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, gmail, password);
    }
    const handleLogin = (gmail, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, gmail, password);
    }
    const handleLogout = () => {
        setLoading(true)
        signOut(auth).then(() => {
        }).catch(err => { const error = err.message })

    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            subscribe();
        }
    }, []);
    const handleGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const handleFacebook = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const info = { handleRegister, handleLogin, handleLogout, handleGoogle, user, loading, handleFacebook }
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default Authcontext;