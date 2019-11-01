import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
      projectId: 'realcubes-46aaa', 
      databaseURL: 'https://realcubes-46aaa.firebaseio.com' 
    })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }


db.settings({ })