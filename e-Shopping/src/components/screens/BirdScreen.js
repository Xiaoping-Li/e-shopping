import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { PetsFlatList } from '../presentations';

import globalStore from '../../../GlobalStore';

class BirdScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../../assets/photo/rain-forest.jpeg')}
      >
        <PetsFlatList 
          data={globalStore.bird} 
          color="#F5C851"
          modalColor="rgba(252,238,202,0.7)"
          navigate={this.props.navigation.navigate}
        />
      </ImageBackground>
    );
  }
}

export default BirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});