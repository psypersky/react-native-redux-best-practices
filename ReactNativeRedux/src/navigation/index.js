// import React, {Component} from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

// import the different screens
import Loading from '../pages/Loading'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Main from '../pages/Main'

// create our app's navigation stack
const AppBottomTabNavigator = createBottomTabNavigator(
  {
    Home: Main,
  },
  // {
  //   initialRouteName: 'Loading',
  // },
)

const AuthStackNavigator = createStackNavigator({
  Login,
  SignUp,
})

const AppNavigator = createSwitchNavigator({
  Loading: Loading,
  App: AppBottomTabNavigator,
  Auth: AuthStackNavigator,
})

console.log(AppNavigator)

const AppNavigatorContainer = createAppContainer(AppNavigator)

/**
 * QUESTION: How to connect an event that triggers an action with
 * the navigator?
 *
 * 1) We could send a Navigator reference to the reducer which in theory
 * is the only part of the code that should be able to affect the state of
 * the app, the navigator has its own state (BAD PRACTICE) so it makes sense.
 *
 * 2) We could create a HOC that connects to the state and listen for changes
 * based on the state it navigates to the desired screen, this would make the
 * `route` a part of the Redux state but it also creates a duplicated state
 * which if gets out of sync it could create very nasty bugs.
 *
 * I) Do you see now why using ReactNavigation is a really bad practice?
 *
 * R) From This two options the less prone to bugs is 1, we don't want to risk
 * nasty bugs because the Navigation state in Redux got out of sync with
 * the Navigation state of ReactNavigator, so we will not implement 2 not even
 * for reference.
 *
 * QUESTION: How do we take navigate() to a reducer?
 */
export default AppNavigatorContainer
