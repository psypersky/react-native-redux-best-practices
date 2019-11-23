import * as firebase from 'firebase'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBJIakNwP5CGxTT-9qWFVRb0KF3H4VV38Y',
  authDomain: 'life-histories.firebaseapp.com',
  databaseURL: 'https://life-histories.firebaseio.com',
  projectId: 'life-histories',
  storageBucket: 'life-histories.appspot.com',
  messagingSenderId: '154687122494',
  appId: '1:154687122494:web:6faf73ee873516cab2756f',
  measurementId: 'G-9L5MYMG0H0',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export default app

export const FIREBASELIBAUTHCHANGE = 'FIREBASELIB::AUTHCHANGE'

/**
 * Add firebase event listeners and execute an action on
 * event
 *
 * NOTICE: Decoupling this library with the rest of the code
 * by using this function this library knows nothing
 * about your code our structure n.n
 *
 * NOTICE: Since this creates an action that is outside the your code planning
 * its very possible that you'll need this function in two different reducers,
 * What happens if you need to trigger two actions instead of one?
 * And finally why does this library knows that it lives in Redux?
 * This is asking for a new developer to start importing project stuff here
 * See: https://github.com/reduxjs/redux/issues/1518
 *
 * MODULARITY: The best approach to implement this is creating an `events`
 * folder on src/events or src/store/events after arguing which is more correct
 */
export function addFirebaseListeners(dispatch, getState) {
  app.auth().onAuthStateChanged(user => {
    dispatch({
      type: FIREBASELIBAUTHCHANGE,
      payload: user,
    })
  })
}
