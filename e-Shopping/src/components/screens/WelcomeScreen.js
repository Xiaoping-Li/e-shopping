import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeCarousel } from '../presentations';


class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomeCarousel />
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
  carousel: {
    width: 375,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});