import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity, 
} from 'react-native';

class Categories extends Component {
  navigateToAquarium = () => this.props.navigation.navigate('Aquarium')

  navigateToBirds = () => this.props.navigation.navigate('Bird')

  navigateToFluffy = () => this.props.navigation.navigate('Fluffy')

  navigateToReptile = () => this.props.navigation.navigate('Fluffy')

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.navigateToAquarium} 
          style={[styles.card, {backgroundColor: '#449bc6'}]}
        >
          <Image source={require("../../../assets/photo/3jellyfish.jpeg")} style={styles.img} />
          <Text style={styles.text}>Aquarium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.navigateToBirds} 
          style={[styles.card, {backgroundColor: '#F5C851'}]}
        >
          <Image source={require("../../../assets/photo/1parrot.jpeg")} style={styles.img} />
          <Text style={styles.text}>Birds</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.navigateToFluffy} 
          style={[styles.card, {backgroundColor: '#EF823F'}]}
        >
          <Image source={require("../../../assets/photo/4panda.jpeg")} style={styles.img} />
          <Text style={styles.text}>Fluffy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.navigateToReptile} 
          style={[styles.card, {backgroundColor: '#5BBC93'}]}
        >
          <Image source={require("../../../assets/photo/2iguana.png")} style={styles.img} />
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
  }
});