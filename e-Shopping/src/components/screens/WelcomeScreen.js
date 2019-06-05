import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WelcomeCarousel } from '../presentations';




class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View >
          <WelcomeCarousel />
        </View>
        
        <View>
          <Text>Sign In</Text>
        </View>
        
        <View>
          <Text>Sign Up</Text>
        </View>
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