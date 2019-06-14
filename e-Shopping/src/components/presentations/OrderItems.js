import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, FlatList, } from 'react-native';


class OrderItems extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <FlatList
                data={this.props.pets}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return (
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={item.img} style={{width: 30, height: 30, borderRadius: 5, marginRight: 30}}/>
                                <Text>{item.name}</Text>
                            </View>

                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{marginRight: 30}}>{item.price}</Text>
                                <Text>{item.count}</Text>
                            </View>
                        </View>
                    );
                }} 
            />
        </View>
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
    justifyContent: 'space-between',
  },
});