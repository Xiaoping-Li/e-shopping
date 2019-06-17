import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Categories, Header, } from '../presentations';

import axios from 'axios';

import {observer} from 'mobx-react/native';
import {action} from 'mobx';
import globalStore from '../../../GlobalStore';

class HomeScreen extends React.Component {
  componentDidMount = () => {
    this.getAquarium();
    this.getBird();
    this.getFluffy();
    this.getReptile();
  }

  getAquarium = () => {
    axios
      .get(`http://192.168.0.107:5000/pets/?category=Aquarium`)
      .then(action(result => {
        if (result.data.length) {
          globalStore.initAquarium(result.data);
        }
      }))
      .catch(err => console.log(err));
  }

  getBird = () => {
    axios
      .get(`http://192.168.0.107:5000/pets/?category=Bird`)
      .then(action(result => {
        if (result.data.length) {
          globalStore.initBird(result.data);
        }
      }))
      .catch(err => console.log(err));
  }

  getFluffy =() => {
    axios
      .get(`http://192.168.0.107:5000/pets/?category=Fluffy`)
      .then(action(result => {
        if (result.data.length) {
          globalStore.initFluffy(result.data);
        }
      }))
      .catch(err => console.log(err));
  }

  getReptile = () => {
    axios
      .get(`http://192.168.0.107:5000/pets/?category=Reptile`)
      .then(action(result => {
        if (result.data.length) {
          globalStore.initReptile(result.data);
        }
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header navigation={this.props.navigation} />
        </View>

        <View>
          <Categories navigation={this.props.navigation} />
        </View>
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
    justifyContent: 'space-between',
  },
});