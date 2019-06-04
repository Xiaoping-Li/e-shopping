import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cute pets slideshow</Text>
        <Text>Welcome to WelcomeScreen</Text>
        <Text>Sign In</Text>
        <Text>Sign Up</Text>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});