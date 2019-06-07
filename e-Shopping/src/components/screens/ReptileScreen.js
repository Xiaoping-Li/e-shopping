import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { PetsFlatList } from '../presentations';

class ReptileScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../../../assets/photo/reptile.jpeg')}
      >
        <PetsFlatList data={pets} color="#5BBC93"/>
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

const pets = [
  {
    _id: '5793f936-8948-11e9-bc42-526af7761f01',
    name: 'Chameleon',
    img: require('../../../assets/photo/r-chameleon.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fb7a-8948-11e9-bc42-526af7762f03',
    name: 'Green Snake',
    img: require('../../../assets/photo/r-green-snake.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7763f65',
    name: 'Iguana',
    img: require('../../../assets/photo/r-iguana.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7744f66',
    name: 'Leopard Gecko',
    img: require('../../../assets/photo/r-leopard-gecko.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7765f67',
    name: 'Newt',
    img: require('../../../assets/photo/r-Newt.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
  {
    _id: '5793fc9c-8948-11e9-bc42-526af7766f68',
    name: 'Red-Eyed Tree Frog',
    img: require('../../../assets/photo/r-red-eyed-tree-frog.png'),
    desc: 'Choosing Anime produces unusual hair and eye colours, and choosing Unique produces unusual hair, eye AND skin colours. Choose simple or detailed for basic or more inclusive results respectively.',
    count: 10,
    price: 20,
  },
];