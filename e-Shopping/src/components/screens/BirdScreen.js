import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { PetsFlatList } from '../presentations';

class BirdScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../../assets/photo/rain-forest.jpeg')}
      >
        <PetsFlatList 
          data={pets} 
          color="#F5C851"
          modalColor="rgba(252,238,202,0.7)"
        />
      </ImageBackground>
    );
  }
}

export default BirdScreen;

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
    _id: '5793f6de-8948-11e9-bc42-526af7764f64',
    name: 'Cockatiel Parrot',
    img: require('../../../assets/photo/b-cockatiel-parrot.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793f814-8948-11e9-bc42-526af7764f64',
    name: 'Corella',
    img: require('../../../assets/photo/b-corella.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793f936-8948-11e9-bc42-526af7764f64',
    name: 'Hummingbird',
    img: require('../../../assets/photo/b-hummingbird.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fa58-8948-11e9-bc42-526af7764f64',
    name: 'Love Birds',
    img: require('../../../assets/photo/b-love-birds.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fb7a-8948-11e9-bc42-526af7764f64',
    name: 'Parrot Macaw Red',
    img: require('../../../assets/photo/b-parrot-macaw-red.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7764f64',
    name: 'Snowy Owl',
    img: require('../../../assets/photo/b-snowy-owl.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
];