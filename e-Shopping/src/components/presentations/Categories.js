import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Categories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Categories</Text>
        <Text>Aquarium</Text>
        <Text>Birds</Text>
        <Text>Fluffy</Text>
        <Text>Reptile</Text>
      </View>
    );
  }
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});