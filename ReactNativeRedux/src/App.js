// import React from 'react'
// import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

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
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)
export default createAppContainer(AppNavigator)