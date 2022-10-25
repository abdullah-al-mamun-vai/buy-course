import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';
export const UserContext = createContext();

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
    }, [])
    const info = { handleRegister, handleLogin, handleLogout }
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default Authcontext;