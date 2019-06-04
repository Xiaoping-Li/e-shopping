import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SignInScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to SignInScreen</Text>
      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});