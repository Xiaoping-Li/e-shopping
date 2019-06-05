import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';


class WelcomeCarousel extends React.Component {
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
          <Image source={item.img} style={{width: 300, height: 180, borderRadius: 5}}/>
      </View>
    );
  }

  render() {
    const data = [
      {
        name: 'panda',
        nums: 10,
        img: require('../../../assets/photo/f-panda.png'),
      },
      {
        name: 'snake',
        nums: 20,
        img: require('../../../assets/photo/r-green-snake.png'),
      },
      {
        name: 'clownfish',
        nums: 10,
        img: require('../../../assets/photo/a-clownfish.png'),
      },
      {
        name: 'cockatiel parrot',
        nums: 10,
        img: require('../../../assets/photo/b-cockatiel-parrot.png'),
      },
      {
        name: 'red eyed tree frog',
        nums: 10,
        img: require('../../../assets/photo/r-red-eyed-tree-frog.png'),
      },
    ];
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={data}
          renderItem={this._renderItem}
          sliderWidth={300}
          sliderHeight={250}
          itemWidth={300}
          itemHeight={200}
          autoplay={true}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          enableSnap={true}
          loop={true}
          autoplayInterval={3000}
          layout={'stack'}
        />
      </View>
    );
  }
}

export default WelcomeCarousel;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 300,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  item: {
    width: 300,
    height: 200,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius:  5,
    marginTop: 30,
  }
});