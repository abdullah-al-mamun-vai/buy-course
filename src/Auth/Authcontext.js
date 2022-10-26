import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();



const auth = getAuth(app)

const Authcontext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const handleRegister = (gmail, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, gmail, password);
    }
    const handleLogin = (gmail, password) => {
        return signInWithEmailAndPassword(auth, gmail, password);
    }
    const handleLogout = () => {
        setLoading(true)
        signOut(auth).then(() => {
        }).catch(error => { })

    }
    const handleFacebook = (provider) => {
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, []);
    const handleGoogle = (provider) => {
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