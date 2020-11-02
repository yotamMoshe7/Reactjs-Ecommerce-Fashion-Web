import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBUNEG1B8-QiuSMamUuOT_l-o9irvFklPU",
  authDomain: "crwn-db-9966a.firebaseapp.com",
  databaseURL: "https://crwn-db-9966a.firebaseio.com",
  projectId: "crwn-db-9966a",
  storageBucket: "crwn-db-9966a.appspot.com",
  messagingSenderId: "864494619768",
  appId: "1:864494619768:web:b61652ac1c7fc52a8df18d",
  measurementId: "G-MVKQJP4SLD"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user');
    }
  }

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;