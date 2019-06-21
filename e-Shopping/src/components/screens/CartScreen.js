import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  TouchableOpacity, 
} from 'react-native';
import { CartItem } from '../presentations';

import {action} from 'mobx';
import {observer} from 'mobx-react/native';
import globalStore from '../../../GlobalStore';

@observer
class CartScreen extends Component {
  navigateToHome = () => this.props.navigation.navigate('Home')

  navigateToShipping = () => this.props.navigation.navigate('Shipping')

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Shopping Cart</Text>
        {globalStore.pets.length ?
          <View>
            <View style={styles.tableHeader}>
              <Text style={{width: 20}}></Text>
              <Text style={{width: 50}}></Text>
              <Text style={{width: 190}}></Text>
              <Text style={{width: 60, textAlign: 'right', color: '#3E6890'}}>Quantity</Text>
            </View>
            <View style={styles.list}>
              <FlatList
                data={globalStore.pets.slice()}
                keyExtractor={(item) => item._id} 
                renderItem={({item}) => <CartItem pet={item} />} 
              />   
            </View>
            <Text style={styles.subTotal}>Subtotal: <Text style={{color: 'red'}}>${(globalStore.subTotal/100).toFixed(2)}</Text></Text>
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