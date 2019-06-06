import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to CartScreen</Text>
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