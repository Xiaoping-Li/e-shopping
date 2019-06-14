import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import UP_IMG from '../../../assets/photo/ic_arr_up.png';
import DOWN_IMG from '../../../assets/photo/ic_arr_down.png'; 

import { LinearGradient } from 'expo';
import { OrderItems } from '../presentations';

class OrderScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient 
                    // colors={['#F8D885', '#F5C851']}
                    colors={['#8CD0B3','#5BBC93']} 
                    style={styles.header}
                >
                    <Text style={styles.headerText}>Orders List</Text> 
                </LinearGradient>
        
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
                                        <Text style={styles.orderHeader}>{item.createAt}</Text>
                                    </View>
                                }
                            >
                                <View style={{flex: 1}}>
                                    <View style={styles.tracking}>
                                        <Text style={{fontWeight: '600', color: '#0E4375', marginRight: 30}}>Order Tracking:</Text>
                                        <Text style={[item.status === "Delivered" ? {color: '#0E4375'} : {color: 'green'},{fontWeight: '600'}]}>{item.status}</Text>
                                    </View>
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
    header: {
        width: Dimensions.get('window').width, // get the width of the window
        paddingVertical: 20,
        marginBottom: 30,
    },
    headerText: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
    },
    orderHeader: {
        width: Dimensions.get('window').width,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '600',
        color: '#0E4375',
        padding: 10,
    },
    tracking: {
        width: 250,
        borderBottomWidth: 1.5,
        borderBottomColor: '#51A984',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10,
        marginBottom: 10,
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
                img: require('../../../assets/photo/f-panda.png'),
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