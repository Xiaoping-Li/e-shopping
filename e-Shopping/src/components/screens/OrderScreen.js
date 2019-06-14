import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, FlatList, } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import UP_IMG from '../../../assets/photo/ic_arr_up.png';
import DOWN_IMG from '../../../assets/photo/ic_arr_down.png'; 

import { OrderItems } from '../presentations';

class OrderScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Orders' List</Text>

        <View>
            <FlatList
                data={data}
                keyExtractor={item => item._id}
                renderItem={({item}) => 
                    <DropDownItem
                        key={item._id}
                        contentVisible={false}
                        invisibleImage={DOWN_IMG}
                        visibleImage={UP_IMG}
                        header={
                            <View>
                                <Text>{item.createAt}</Text>
                            </View>
                        }
                    >
                        <View>
                           <Text>{item.status}</Text>
                           <OrderItems pets={item.cartID} /> 
                        </View>
                    </DropDownItem>
                } 
            />
        </View>
      </View>
    );
  }
}

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const data = [
    {
        _id: 'order123456789',
        userID: 'user1234567890',
        status: 'Packaging',
        cartID: [
            {
                name: 'Panda',
                img: require('../../../assets/photo/4panda.jpeg'),
                count: 2,
                price: 2000
            },
        ],
        amount: 5500,
        createAt: '2019-06-12'
    },
    {
        _id: 'order873905896',
        userID: 'user1234567890',
        status: 'Delivering',
        cartID: [
            {
                name: 'Koala',
                img: require('../../../assets/photo/f-koala.png'),
                count: 1,
                price: 2000
            },
            {
                name: 'Guinea Pig',
                img: require('../../../assets/photo/f-guinea-pig.png'),
                count: 1,
                price: 2000
            },
        ],
        amount: 5500,
        createAt: '2019-05-30'
    },
    {
        _id: 'order876459320',
        userID: 'user1234567890',
        status: 'Delivered',
        cartID: [
            {
                name: 'Corella',
                img: require('../../../assets/photo/b-corella.png'),
                count: 1,
                price: 2000
            },
            {
                name: 'Cockatiel Parrot',
                img: require('../../../assets/photo/b-cockatiel-parrot.png'),
                count: 1,
                price: 2000
            },
            {
                name: 'Alpaca',
                img: require('../../../assets/photo/f-alpaca.png'),
                count: 1,
                price: 2000
            },
        ],
        amount: 7000,
        createAt: '2019-05-20'
    },
];