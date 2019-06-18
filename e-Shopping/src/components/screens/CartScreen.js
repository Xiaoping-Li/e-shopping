import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  TouchableOpacity, 
} from 'react-native';
import { CartItem } from '../presentations';

import globalStore from '../../../GlobalStore';

class CartScreen extends Component {
  navigateToHome = () => this.props.navigation.navigate('Home')

  navigateToShipping = () => this.props.navigation.navigate('Shipping')

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Shopping Cart</Text>
        {globalStore.cart.pets.length ?
          <View>
            <View style={styles.tableHeader}>
              <Text style={{width: 20}}></Text>
              <Text style={{width: 50}}></Text>
              <Text style={{width: 140}}></Text>
              <Text style={{width: 50, textAlign:'left', color: '#3E6890'}}>Price</Text>
              <Text style={{width: 60, textAlign: 'right', color: '#3E6890'}}>Quantity</Text>
            </View>
            <View style={styles.list}>
              <FlatList
                data={globalStore.cart.pets}
                keyExtractor={(item) => item._id} 
                renderItem={({item}) => <CartItem pet={item} />} 
              />
            </View>
            <Text style={styles.subTotal}>Subtotal (1 item): <Text style={{color: 'red'}}>$15.99</Text></Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={this.navigateToHome}
                style={styles.btn}
              >
                <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Shopping</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.navigateToShipping}
                style={styles.btn}
              >
                <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>  
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

  // Empty shopping cart
  empty: {
    fontSize: 20,
    width: 320,
    color: '#0E4375',
    textAlign: 'left', 
  },
  header: {
    width: 320,
    fontSize: 30,
    color: '#0E4375',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '600',
  },
  shopping: {
    color: '#F5C851',
    textDecorationLine: 'underline',
    fontFamily: 'Chalkboard SE',
    fontWeight: '600',
    fontSize: 30,
  },

  // FlatList style
  list: {
    borderTopColor: '#3E6890',
    borderBottomColor: '#3E6890',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 320,
    height: 380,
  },
  tableHeader: {
    width: 320,
    flexDirection: 'row',
    marginBottom: 5,
  },
  subTotal: {
    marginTop: 10,
    width: 320,
    textAlign: 'right',
    fontSize: 20,
    color: '#0E4375',
  },
  btnContainer: {
    width: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    marginTop: 30,
  },
  btn: {
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5C851',
    borderRadius: 10,
    shadowColor: '#312810',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
  }
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