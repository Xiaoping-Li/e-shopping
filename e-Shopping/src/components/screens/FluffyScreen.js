import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FluffyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to FluffyScreen</Text>
      </View>
    );
  }
}

export default FluffyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});