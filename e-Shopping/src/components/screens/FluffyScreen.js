import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { PetsFlatList } from '../presentations';

class FluffyScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../../assets/photo/flower-field.jpeg')}
      >
        <PetsFlatList 
        data={pets} 
        color="#EF823F"
        modalColor="rgba(250,217,197,0.7)"
        />
      </ImageBackground>
    );
  }
}

export default FluffyScreen;

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
    _id: '5794005c-8948-11e9-bc42-526af7764f64',
    name: 'Alpaca',
    img: require('../../../assets/photo/f-alpaca.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5794019c-8948-11e9-bc42-526af7764f64',
    name: 'Bunny',
    img: require('../../../assets/photo/f-bunny.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793f936-8948-11e9-bc42-526af7764f01',
    name: 'Cat',
    img: require('../../../assets/photo/f-cat.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fb7a-8948-11e9-bc42-526af7764f03',
    name: 'Dog',
    img: require('../../../assets/photo/f-dog.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7764f65',
    name: 'Guinea Pig',
    img: require('../../../assets/photo/f-guinea-pig.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7764f66',
    name: 'Koala',
    img: require('../../../assets/photo/f-koala.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7764f67',
    name: 'Panda',
    img: require('../../../assets/photo/f-panda.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7764f68',
    name: 'Red Panda',
    img: require('../../../assets/photo/f-red-panda.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
];