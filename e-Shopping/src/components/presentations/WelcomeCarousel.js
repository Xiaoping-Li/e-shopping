import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-carousel';

class WelcomeCarousel extends React.Component {
  render() {
    return (
      
        <Carousel
          width={375}
          animate={true}
          delay={2000}
          loop={true}
          hideIndicators={true}
        >
          <View style={styles.container}>
            <Text>Sign In</Text>
          </View>
          <View style={styles.container}>
            <Text>Sign Up</Text>
          </View>
          <View style={styles.container}>
            <Text>Sign Out</Text>
          </View>
        </Carousel>
    
    );
  }
}

export default WelcomeCarousel;

const styles = StyleSheet.create({
  container: {
    width: 375,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});