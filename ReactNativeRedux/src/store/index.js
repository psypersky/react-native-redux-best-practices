import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from '../reducers'
// import {addFirebaseListeners} from '../lib/firebase'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger),
    // other store enhancers if any
  ),
)

export default store

// DISABLED EXAMPLE
// Trigger Redux actions on Firebase events
// addFirebaseListeners(store.dispatch, store.getState)
