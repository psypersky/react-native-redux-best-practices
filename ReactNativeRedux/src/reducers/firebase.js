import {FIREBASE_INITIALIZED} from '../actions/firebase'

const initialState = {
  initialized: false,
}

export default function firebaseReducer(state = initialState, action) {
  const {type} = action

  switch (type) {
    case FIREBASE_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      }
    }

    default:
      return state
  }
}
