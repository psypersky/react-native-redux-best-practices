/**
 * External events triggered by libraries that dispatch
 * actions
 */
import store from '../store'
import firebase from '../lib/firebase'
import {USER_SET} from '../actions/user'
import {FIREBASE_INITIALIZED} from '../actions/firebase'

firebase.auth().onAuthStateChanged(user => {
  const {email} = user
  store.dispatch({
    type: FIREBASE_INITIALIZED,
  })
  store.dispatch({
    type: USER_SET,
    payload: {
      email,
    },
  })
})
