import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AddressForm } from '../presentations';

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

    navigateToTax = () => this.props.navigation.navigate('Tax')

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