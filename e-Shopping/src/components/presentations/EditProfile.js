import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class EditProfile extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.toggleVisible()}>Welcome to EditProfile</Text>
      </View>
    );
  }
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});