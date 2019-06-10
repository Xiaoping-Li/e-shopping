import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList, 
} from 'react-native';
import { CartItem } from '../presentations';

class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shopping Cart</Text>
        <FlatList
          data={cart}
          keyExtractor={(item) => item._id} 
          renderItem={({item}) => <CartItem pet={item} />}
        />

      </View>
    );
  }
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const cart = [
  {
    _id: '5793f6de-8948-11e9-bc42-526af7764f64',
    name: 'Cockatiel Parrot',
    img: require('../../../assets/photo/b-cockatiel-parrot.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 5,
    price: 20,
  },
  {
    _id: '5793f936-8948-11e9-bc42-526af7764f64',
    name: 'Hummingbird',
    img: require('../../../assets/photo/b-hummingbird.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 0,
    price: 20,
  },
  {
    _id: '5794005c-8948-11e9-bc42-526af7764f64',
    name: 'Alpaca',
    img: require('../../../assets/photo/f-alpaca.png'),
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
];