import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { PetsFlatList } from '../presentations';

import globalStore from '../../../GlobalStore';

class FluffyScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../../assets/photo/flower-field.jpeg')}
      >
        <PetsFlatList 
        data={globalStore.fluffy} 
        color="#EF823F"
        modalColor="rgba(250,217,197,0.7)"
        navigate={this.props.navigation.navigate}
        />
      </ImageBackground>
    );
  }
}

export default FluffyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});