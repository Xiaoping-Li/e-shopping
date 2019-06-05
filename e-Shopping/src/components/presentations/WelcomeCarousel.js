import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Carousel from 'react-native-carousel';


class WelcomeCarousel extends React.Component {
  render() {
    return (
      
        <Carousel
          width={375}
          animate={true}
          delay={3000}
          loop={true}
          hideIndicators={false}
          indicatorOffset={150}
          indicatorAtBottom={true}
          indicatorSize={15}
        >
          <View style={styles.container}>
            <Image width={300} height={300} source={require('../../../assets/photo/f-panda.png')} />
          </View>

          <View style={styles.container}>
            <Image width={300} height={300} source={require('../../../assets/photo/a-clownfish.png')} />
          </View> 

          <View style={styles.container}>
            <Image width={300} height={300} source={require('../../../assets/photo/r-green-snake.png')} />
          </View>

          <View style={styles.container}>
            <Image width={300} height={300} source={require('../../../assets/photo/b-cockatiel-parrot.png')} />
          </View>

          <View style={styles.container}>
            <Image width={300} height={300} source={require('../../../assets/photo/r-red-eyed-tree-frog.png')} />
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