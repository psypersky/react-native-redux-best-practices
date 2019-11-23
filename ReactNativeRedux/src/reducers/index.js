import {combineReducers} from 'redux'
// NOTE: No need to name them somethingReducers, we are on the reducers folder
import firebase from './firebase'
import user from './user'

export default combineReducers({
  user,
  firebase,
})
