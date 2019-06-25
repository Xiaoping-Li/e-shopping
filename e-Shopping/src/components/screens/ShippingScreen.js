import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AddressForm } from '../presentations';
import axios from 'axios';
import globalStore from '../../../GlobalStore';
import {action} from 'mobx';


class ShippingScreen extends Component {
    constructor() {
        super();
        this.state = {
            recipient: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            country: '',  
        };
    }

    handleUseDefault = () => {
        if (!globalStore.user.address) {
            alert("You haven't set default shipping address yet!");
            return;
        }
        this.setState({
            recipient: globalStore.user.address.recipient,
            street: globalStore.user.address.street,
            city: globalStore.user.address.city,
            state: globalStore.user.address.state,
            zip: globalStore.user.address.zip,
            country: globalStore.user.address.country, 
        });
    }

    handleSetDefault = () => {
        const userID = globalStore.user._id;
        if (this.state.recipient === '' || this.state.street === '' || this.state.city === '' || this.state.state === '' || this.state.zip === '' || this.state.country === '') {
            alert('All fields are required');
            return;
        }

        const address = {
            recipient: this.state.recipient,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            country: this.state.country, 
        };

        axios
            .put(`http://192.168.0.107:5000/users/?id=${userID}`, address)
            .then(action(result => {
                if (result.data.ok) {
                    globalStore.updateAddress(address);
                    console.log(globalStore.user.address);
                    alert("Set this address as your default address");
                }
            }))
            .catch(err => console.log("Error when try to update user address: " + err));
    }

    handleRecipientChange = (recipient) => {
        this.setState({recipient});
    }

    handleStreetChange = (street) => {
        this.setState({street});
    }

    handleCityChange = (city) => {
        this.setState({city});
    }

    handleStateChange = (state) => {
        this.setState({state});
    }

    handleZipChange = (zip) => {
        this.setState({zip});
    }

    handleCountryChange = (country) => {
        this.setState({country});
    }

    navigateToCart = () => this.props.navigation.navigate('Cart')

    submitAddress = () => {
        const address = {
            recipient: this.state.recipient,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            country: this.state.country, 
        };
        const orderID = globalStore.pendingOrder;

        axios
            .put(`http://192.168.0.107:5000/orders/?id=${orderID}`, address)
            .then(result => {
                if (result.data.ok) this.props.navigation.navigate('Tax');
            })
            .catch(err => console.log("Error when try to update order address: " + err));    
    }

    render() {
        return (
            <View style={styles.container}>
                <AddressForm
                    recipient={this.state.recipient}
                    street={this.state.street}
                    city={this.state.city}
                    state={this.state.state}
                    zip={this.state.zip}
                    country={this.state.country}
                    onRecipientChange={this.handleRecipientChange} 
                    onStreetChange={this.handleStreetChange}
                    onCityChange={this.handleCityChange}
                    onStateChange={this.handleStateChange}
                    onZipChange={this.handleZipChange}
                    onCountryChange={this.handleCountryChange}
                    onSetDefaultChange={this.handleSetDefault}
                    onUseDefaultChange={this.handleUseDefault}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={this.navigateToCart}
                        style={[styles.btn, styles.shadow]}
                    >
                        <Text style={styles.btnText}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.submitAddress}
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