import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeCarousel } from '../presentations';


class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
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
  carouselContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 375,
    height: 375,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    // borderBottomEndRadius: 5,
  },
  carousel: {
    width: 375,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});