import React, {Component} from 'react'
import {Provider} from 'react-redux'
import './lib/firebase'
import store from './store'
import './events'
import Navigator from './navigation'
import NavigationService from './navigation/service'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </Provider>
    )
  }
}
