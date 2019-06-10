import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  TouchableOpacity, 
} from 'react-native';
import { CartItem } from '../presentations';

class CartScreen extends Component {
  navigateToHome = () => this.props.navigation.navigate('Home')

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Shopping Cart</Text>
        {cart.length ? 
          <FlatList
            data={cart}
            keyExtractor={(item) => item._id} 
            renderItem={({item}) => <CartItem pet={item} />}
          />
          :
          <TouchableOpacity
            onPress={this.navigateToHome}
            style={{flexDirection: 'row'}}
          >
            <Text style={styles.empty}>Your Shopping Cart is empty. Enjoy your <Text style={styles.shopping}>Shopping!</Text></Text>
          </TouchableOpacity>  
        }
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
    justifyContent: 'flex-start',
  },
  empty: {
    fontSize: 20,
    width: 300,
    color: '#0E4375',
    textAlign: 'left', 
  },
  header: {
    width: 300,
    fontSize: 30,
    color: '#0E4375',
    textAlign: 'left',
    marginTop: 30,
    marginBottom: 30,
  },
  shopping: {
    color: '#F5C851',
    textDecorationLine: 'underline',
    fontFamily: 'Chalkboard SE',
    fontWeight: '600',
    fontSize: 30,
  },
});

const cart = [
  // {
  //   _id: '5793f6de-8948-11e9-bc42-526af7764f64',
  //   name: 'Cockatiel Parrot',
  //   img: require('../../../assets/photo/b-cockatiel-parrot.png'),
  //   desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
  //   count: 5,
  //   price: 20,
  // },
  // {
  //   _id: '5793f936-8948-11e9-bc42-526af7764f64',
  //   name: 'Hummingbird',
  //   img: require('../../../assets/photo/b-hummingbird.png'),
  //   desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
  //   count: 0,
  //   price: 20,
  // },
  // {
  //   _id: '5794005c-8948-11e9-bc42-526af7764f64',
  //   name: 'Alpaca',
  //   img: require('../../../assets/photo/f-alpaca.png'),
  //   desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
  //   count: 10,
  //   price: 20,
  // },
  // {
  //   _id: '5793fc9c-8948-11e9-bc42-526af7764f66',
  //   name: 'Koala',
  //   img: require('../../../assets/photo/f-koala.png'),
  //   desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
  //   count: 10,
  //   price: 20,
  // },
];