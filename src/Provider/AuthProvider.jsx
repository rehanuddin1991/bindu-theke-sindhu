import React, { createContext, useEffect, useState } from 'react'
import {auth} from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export const authContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const createUser=(email, password)=> {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=> {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle=()=> {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const mySignOut=()=> {
        signOut(auth);
        setUser(null)
    }

    useEffect( () => {
     const unsubscribe=   onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
    })
    return ( )=> { unsubscribe() }
    },[])

    const authInfo={
        user, mySignOut,signIn,signInWithGoogle,setUser,
        createUser
    }
  return (
    <authContext.Provider value={authInfo}> {children}</authContext.Provider>
  )
}

export default AuthProvider