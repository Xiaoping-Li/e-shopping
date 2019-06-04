import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BirdScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to BirdScreen</Text>
      </View>
    );
  }
}

export default BirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});