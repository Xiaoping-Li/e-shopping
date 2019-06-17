import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { PetsFlatList } from '../presentations';

import globalStore from '../../../GlobalStore';


class AquariumScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../../assets/photo/sea-bubble.jpeg')}
      >
        <PetsFlatList 
          data={globalStore.aquarium} 
          color="#449bc6"
          modalColor="rgba(198,225,237,0.7)"
        />
      </ImageBackground>
    );
  }
}

export default AquariumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});