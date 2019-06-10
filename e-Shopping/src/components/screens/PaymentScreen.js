import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class PaymentScreen extends Component {

    navigateToTax = () => this.props.navigation.navigate('Tax')

    navigateToHome = () => this.props.navigation.navigate('Home')

    render() {
        return (
            <View style={styles.container}>
                <Text>Payment Page</Text>
                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
                    <TouchableOpacity
                        onPress={this.navigateToTax}
                        style={styles.btn}
                    >
                        <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.navigateToHome}
                        style={styles.btn}
                    >
                        <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 150,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5C851',
        borderRadius: 10,
        marginLeft: 20,
        shadowColor: '#312810',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 3,
    }
});