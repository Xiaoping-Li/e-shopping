import React, { PureComponent } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import Pet from './Pet';

class PetsFlatList extends PureComponent {
  render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.props.data}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
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