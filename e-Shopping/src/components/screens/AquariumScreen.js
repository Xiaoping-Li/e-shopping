import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { PetsFlatList } from '../presentations';

class AquariumScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../../assets/photo/sea-bubble.jpeg')}
      >
        <PetsFlatList data={pets} color="#449bc6"/>
      </ImageBackground>
    );
  }
}

export default AquariumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pets = [
  {
    _id: '5793eb58-8948-11e9-bc42-526af7764f64',
    name: 'Jellyfish',
    img: require('../../../assets/photo/a-jellyfish.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793edf6-8948-11e9-bc42-526af7764f64',
    name: 'Moorish Idol',
    img: require('../../../assets/photo/a-Moorish-Idol.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793ef40-8948-11e9-bc42-526af7764f64',
    name: 'Red Ears Turtles',
    img: require('../../../assets/photo/a-red-ears-turtles.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793f076-8948-11e9-bc42-526af7764f64',
    name: 'Surgeonfish',
    img: require('../../../assets/photo/a-Surgeonfish.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793f1a2-8948-11e9-bc42-526af7764f64',
    name: 'Clownfish',
    img: require('../../../assets/photo/a-clownfish.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793f58a-8948-11e9-bc42-526af7764f64',
    name: 'Yellow Tang',
    img: require('../../../assets/photo/a-Yellow-Tang.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
];