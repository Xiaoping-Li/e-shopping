import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';


class PetsCarousel extends React.Component {
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
          <Image source={item.img} style={styles.img}/>
          <Text>{item.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={250}
          sliderHeight={250}
          itemWidth={250}
          itemHeight={200}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          enableSnap={true}
          layout={'stack'}
          firstItem={this.props.idx}
        />
      </View>
    );
  }
}

export default PetsCarousel;

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 230,
    backgroundColor: '#EF823F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#2F1A0C',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  item: {
    width: 250,
    height: 190,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius:  5,
    marginTop: 15,
  },
  img: {
    width: 240, 
    height: 180, 
    marginTop: 5,
    borderRadius: 5,
  },
});