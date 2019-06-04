import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AquariumScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to AquariumScreen</Text>
      </View>
    );
  }
}

export default AquariumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});