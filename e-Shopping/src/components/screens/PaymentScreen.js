import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class PaymentScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shipping Info here</Text>
      </View>
    );
  }
}

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});