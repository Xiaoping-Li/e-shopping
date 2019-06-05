import React from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage, } from 'react-native';

class HomeScreen extends React.Component {
  signOut = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to HomeScreen</Text>
        <Button
          title="Sign Out"
          onPress={this.signOut}
        />
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
    justifyContent: 'center',
  },
});