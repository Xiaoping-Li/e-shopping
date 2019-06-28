import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';


class OrderItems extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.pets}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => {
                return (
                    <View style={styles.rowContainer}>
                        <View>
                            <Image source={{uri: item.pet.img}} style={styles.img}/>   
                        </View>

                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.left}>Name:</Text>
                                <Text style={[styles.right, {color: '#0E4375'}]}>{item.pet.name}</Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.left}>Price:</Text>
                                <Text style={styles.right}>${(item.pet.price / 100).toFixed(2)}</Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.left}>Count:</Text>
                                <Text style={styles.right}>{item.pet.count}</Text>
                            </View>    
                        </View>
                    </View>
                );
            }} 
        />
      </View>
    );
  }
}

export default OrderItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  img: {
    width: 50, 
    height: 50, 
    borderRadius: 5, 
    marginRight: 30,
  },
  left: {
    fontWeight: '600',
    color: '#0E4375',
    marginRight: 20,
    textAlign: 'left',
    width: 60,
  },
  right: {
    fontWeight: '600',
    color: 'red',
    textAlign: 'right',
  },
});