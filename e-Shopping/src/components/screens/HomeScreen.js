import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { Categories, Header, } from '../presentations'; 

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>

        <View>
          <Categories />
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});