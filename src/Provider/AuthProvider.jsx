import React, { createContext, useEffect, useState } from 'react'
import {auth} from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider,
     onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

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

    const signInWithFacebook=()=> {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider)
    }


    const signInWithGithub=()=> {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const mySignOut=()=> {
         
        signOut(auth)
        
    }

    useEffect( () => {
     const unsubscribe=   onAuthStateChanged(auth, (currentUser)=> {
        console.log(auth.currentUser);
            setUser(currentUser)
    })
    return ( )=> { unsubscribe() }
    },[auth.currentUser])

    const authInfo={
        user, mySignOut,signIn,signInWithGoogle,setUser,signInWithGithub,signInWithFacebook,
        createUser
    }
  return (
    <authContext.Provider value={authInfo}> {children}</authContext.Provider>
  )
}

export default AuthProvider