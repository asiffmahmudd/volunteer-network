import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

export const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        var user = result.user;
        const data = {
            name : user.displayName,
            email : user.email,
            photo : user.photoURL,
            isLoggedIn : true
        }
        return data;
    }).catch((error) => {
        alert(error.message);
    });
}

export const handleSignOut = () => {
    return firebase.auth().signOut().then(() => {
        return true;
    }).catch((error) => {
        alert(error.message);
    });
}
