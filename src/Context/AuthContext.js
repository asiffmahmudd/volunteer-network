import { createContext, useContext, useState } from "react";
import firebase from 'firebase/app'
import { auth } from "../firebaseConfig";
import { useEffect } from "react";


const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [loggedInUser, setLoggedInUser] = useState()
    const [loading, setLoading] = useState(true)

    const formatUser = (user) => ({
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        uid: user.uid,
    });

    const handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
    
        return auth
        .signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            user = formatUser(user)
            return user;
        }).catch((error) => {
            alert(error.message);
        });
    }

    const handleSignOut = () => {
        return auth.signOut().then(() => {
            return true;
        }).catch((error) => {
            alert(error.message);
        });
    }

    useEffect(() =>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if(user){
                user = formatUser(user)
            }
            setLoggedInUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    const value = { loggedInUser, handleSignIn, handleSignOut }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}