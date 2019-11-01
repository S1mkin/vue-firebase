import firebase from 'firebase/app'
import 'firebase/firestore'

// достаточно apiKey и projectId
const firebaseConfig = {
  apiKey: "AIzaSyC0XQdvzETOmnRLCi5uNMEVzoo5MPg_RR8",
  authDomain: "realcubes-46aaa.firebaseapp.com",
  databaseURL: "https://realcubes-46aaa.firebaseio.com",
  projectId: "realcubes-46aaa",
  storageBucket: "realcubes-46aaa.appspot.com",
  messagingSenderId: "272141778592",
  appId: "1:272141778592:web:e1e3b4da0b3ad0586b93c5"
};


// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }


db.settings({ })