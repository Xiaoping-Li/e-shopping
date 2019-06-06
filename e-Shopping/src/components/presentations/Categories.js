import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image, 
} from 'react-native';

class Categories extends Component {
  render() {
    return (
      <View>
        <Text>Hello cards</Text>
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
  // card: {
  //   flexWrap: 'nowrap',
  // }
});