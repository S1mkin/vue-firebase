/* Initial firebase */
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0XQdvzETOmnRLCi5uNMEVzoo5MPg_RR8",
  authDomain: "realcubes-46aaa.firebaseapp.com",
  databaseURL: "https://realcubes-46aaa.firebaseio.com",
  projectId: "realcubes-46aaa",
  storageBucket: "realcubes-46aaa.appspot.com",
  messagingSenderId: "272141778592",
  appId: "1:272141778592:web:e1e3b4da0b3ad0586b93c5"
};


firebase.initializeApp(firebaseConfig)

Vue.use(firestorePlugin)
/* End Initial firebase */