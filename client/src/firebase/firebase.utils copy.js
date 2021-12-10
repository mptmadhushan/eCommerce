import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  // apiKey: "AIzaSyDFSln0TzjSuqpTHcbpTwdhsdN9v0uOpSQ",
  // authDomain: "ecommerce-db-1870f.firebaseapp.com",
  databaseURL: "https://e-com-4dbdd.firebaseio.com",
  // projectId: "ecommerce-db-1870f",
  // storageBucket: "e-com-4dbdd.appspot.com",
  // messagingSenderId: "286579121755",
  // appId: "1:286579121755:web:bb52f4f2cb1d8b3bf4a97e",
  // measurementId: "G-G6K9D6XDCM"
  apiKey: "AIzaSyDpQccUNjmaNEEUbYMXh-etAlkdvnf9Z3c",
  authDomain: "e-com-4dbdd.firebaseapp.com",
  projectId: "e-com-4dbdd",
  storageBucket: "e-com-4dbdd.appspot.com",
  messagingSenderId: "856369018753",
  appId: "1:856369018753:web:fbf41090cf2aed81205a80",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //------------create new user if not exist in firebase

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//------------create new user if not exist in firebase

//------------create new collection items

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//------------create new collection items

export const convertCollectionsSnapshotToMap = (collections) => {
  const trasnformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return trasnformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
