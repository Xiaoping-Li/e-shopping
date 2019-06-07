import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, 
} from 'react-native';

class Categories extends Component {
  navigateToAquarium = () => this.props.navigation.navigate('Aquarium')

  navigateToBirds = () => this.props.navigation.navigate('Bird')

  navigateToFluffy = () => this.props.navigation.navigate('Fluffy')

  navigateToReptile = () => this.props.navigation.navigate('Reptile')

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.navigateToAquarium} 
          style={[styles.card, styles.shadow, {backgroundColor: '#449bc6'}]}
        >
          <View style={styles.shadow}>
            <Image source={require("../../../assets/photo/3jellyfish.jpeg")} style={styles.img} />
          </View>
          <Text style={styles.text}>Aquarium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.navigateToBirds} 
          style={[styles.card, styles.shadow, {backgroundColor: '#F5C851'}]}
        >
          <View style={styles.shadow}>
            <Image source={require("../../../assets/photo/1parrot.jpeg")} style={styles.img} />
          </View>
          <Text style={styles.text}>Birds</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.navigateToFluffy} 
          style={[styles.card, styles.shadow, {backgroundColor: '#EF823F'}]}
        >
          <View style={styles.shadow}>
            <Image source={require("../../../assets/photo/4panda.jpeg")} style={styles.img} />
          </View>
          <Text style={styles.text}>Fluffy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.navigateToReptile} 
          style={[styles.card, styles.shadow, {backgroundColor: '#5BBC93'}]}
        >
          <View>
            <Image source={require("../../../assets/photo/2iguana.png")} style={styles.img} />
          </View>
          <Text style={styles.text}>Reptile</Text>
        </TouchableOpacity>   
      </View>
    );
  }
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
  },
  card: {
    width: 150,
    height: 200,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 15,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    marginTop: 20,
    fontFamily: 'Chalkboard SE',
    fontWeight: "600",
  },
  shadow: {
    shadowColor: '#353535',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
  }
});