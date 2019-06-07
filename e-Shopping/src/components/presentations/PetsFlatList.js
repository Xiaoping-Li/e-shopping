import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

class PetsFlatList extends Component {
  render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.props.data}
                renderItem={({item}) => <Pet pet={item} />}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
  }
}

export default PetsFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});