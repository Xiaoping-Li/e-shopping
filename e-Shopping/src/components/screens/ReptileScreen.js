import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { PetsFlatList } from '../presentations';

import globalStore from '../../../GlobalStore';

class ReptileScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../../assets/photo/reptile.jpeg')}
      >
        <PetsFlatList 
        data={globalStore.reptile} 
        color="#5BBC93"
        modalColor="rgba(205,234,222,0.7)"
        />
      </ImageBackground>
    );
  }
}

export default ReptileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});