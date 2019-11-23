import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from 'react-redux'

import './lib/firebase'
import store from './store'
import './events'

// import the different screens
import Loading from './pages/Loading'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Main from './pages/Main'

// create our app's navigation stack
const AppNavigator = createStackNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
  },
  {
    initialRouteName: 'Loading',
  },
)
const AppNavigatorContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  componentDidMount() {
    // SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigatorContainer />
      </Provider>
    )
  }
}
