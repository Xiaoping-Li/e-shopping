import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AddressForm } from '../presentations';

class ShippingScreen extends Component {
    constructor() {
        super();
        this.state = {
            address: {
                recipient: '',
                street: '',
                city: '',
                state: '',
                zip: '',
                country: '',
            }
        };
    }

    handleChange = (event) => {
        console.log(event.nativeEvent);
    }

    navigateToCart = () => this.props.navigation.navigate('Cart')

    navigateToTax = () => this.props.navigation.navigate('Tax')

    render() {
        return (
            <View style={styles.container}>
                <AddressForm
                    address={this.state.address}
                    onChange={this.handleChange} 
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={this.navigateToCart}
                        style={[styles.btn, styles.shadow]}
                    >
                        <Text style={styles.btnText}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.navigateToTax}
                        style={[styles.btn, styles.shadow]}
                    >
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ShippingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        width: 320,
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row',
        marginTop: 50,
    },
    btnText: {
        color: '#0E4375',
        fontWeight: '600', 
        fontSize: 20
    },
    btn: {
        width: 150,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5C851',
        borderRadius: 8,
    },
    shadow: {
        shadowColor: '#312810',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 3,
    }
});