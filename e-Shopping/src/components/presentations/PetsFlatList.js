import React, { PureComponent } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text, Image, } from 'react-native';


class PetsFlatList extends PureComponent {
  render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.props.data}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            style={[styles.card, styles.shadow]}
                            onPress={() => {}}
                        >
                            <Image source={item.img} style={styles.img}/>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item._id}
                horizontal={false}
                numColumns={2}
            />
        </View>
    );
  }
}

export default PetsFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  card: {
    width: 150,
    height: 200,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 15,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    color: "#000",
    marginTop: 20,
    fontFamily: 'Chalkboard SE',
    fontWeight: "600",
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});