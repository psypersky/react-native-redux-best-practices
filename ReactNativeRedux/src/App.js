import React, {Component} from 'react'
import {Provider} from 'react-redux'
import './lib/firebase'
import store from './store'
import './events'
import Navigator from './navigation'

export default class App extends Component {
  componentDidMount() {
    // SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
