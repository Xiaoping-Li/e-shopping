import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AuthLoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to AuthLoadingScreen</Text>
      </View>
    );
  }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});