import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class AddTaxScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AddTaxScreen</Text>
      </View>
    );
  }
}

export default AddTaxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});