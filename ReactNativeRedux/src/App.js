import React, {Component} from 'react';
// import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

import './lib/firebase';

// import the different screens
import Loading from './pages/Loading';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Main from './pages/Main';

function rootReducer(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger),
    // other store enhancers if any
  ),
);

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
);
const AppNavigatorContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  componentDidMount() {
    // SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigatorContainer />
      </Provider>
    );
  }
}

// function counter(state, action) {
//   if (typeof state === 'undefined') {
//     return 0
//   }
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
// var store = Redux.createStore(counter)
// var valueEl = document.getElementById('value')
// function render() {
//   valueEl.innerHTML = store.getState().toString()
// }
// render()
// store.subscribe(render)
// document.getElementById('increment')
//   .addEventListener('click', function () {
//     store.dispatch({ type: 'INCREMENT' })
//   })
// document.getElementById('decrement')
//   .addEventListener('click', function () {
//     store.dispatch({ type: 'DECREMENT' })
//   })
// document.getElementById('incrementIfOdd')
//   .addEventListener('click', function () {
//     if (store.getState() % 2 !== 0) {
//       store.dispatch({ type: 'INCREMENT' })
//     }
//   })
// document.getElementById('incrementAsync')
//   .addEventListener('click', function () {
//     setTimeout(function () {
//       store.dispatch({ type: 'INCREMENT' })
//     }, 1000)
//   })
