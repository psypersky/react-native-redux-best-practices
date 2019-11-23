import {USER_SET, USER_DEL} from '../actions/user'

const userInitialState = {
  loggedIn: false,
  email: '',
}

export default function userReducer(state = userInitialState, action) {
  const {payload, type} = action

  switch (type) {
    case USER_SET: {
      return {
        ...state,
        loggedIn: true,
        email: payload.email,
      }
    }

    case USER_DEL: {
      return userInitialState
    }

    default:
      return state
  }
}
