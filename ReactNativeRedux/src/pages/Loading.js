import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

export default class Loading extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
