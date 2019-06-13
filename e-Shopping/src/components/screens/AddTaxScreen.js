import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class AddTaxScreen extends Component {
    constructor() {
        super();
        this.state = {
            total: 290.65,
        };
    }
    navigateToShipping = () => this.props.navigation.navigate('Shipping')

    navigateToPayment = () => this.props.navigation.navigate('Payment')

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.summary}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Order Summary</Text>
                    </View>

                    <View style={styles.rowContainer}>
                        <Text style={styles.left}>Item Total:</Text>
                        <Text style={styles.right}>$250.00</Text>
                    </View>

                    <View style={styles.rowContainer}>
                        <Text style={styles.left}>Tax:</Text>
                        <Text style={styles.right}>$20.65</Text>
                    </View>

                    <View style={[styles.rowContainer, {borderBottomColor: '#1461aa', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20}]}>
                        <Text style={styles.left}>Shipping and handling:</Text>
                        <Text style={styles.right}>$20.00</Text>
                    </View>

                    <Text style={[styles.right, {width: 300}]}>Total $290.65</Text>    
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={this.navigateToShipping}
                        style={[styles.btn, styles.shadow]}
                    >
                        <Text style={styles.btnText}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.navigateToPayment}
                        style={[styles.btn, styles.shadow]}
                    >
                        <Text style={styles.btnText}>Pay ${this.state.total}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddTaxScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    summary: {
        width: 350,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#1461aa',
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom: 30,
        shadowColor: '#0a2f52',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 0.5,
    },
    header: {
        width: 300,
        fontSize: 30,
        color: '#0e4375',
        textAlign: 'center',
    },
    headerContainer: {
        width: 300, 
        borderBottomColor: '#1461aa', 
        borderBottomWidth: 1, 
        marginVertical: 20, 
        paddingBottom: 20
    },
    left: {
        width: 200,
        color: '#000',
        textAlign: 'left',
        paddingLeft: 5,
        fontWeight: '600',
    },
    right: {
        width: 90,
        color: '#000',
        textAlign: 'right',
        paddingRight: 5,
        fontWeight: '600',
    },
    rowContainer: {
        width: 300,
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row',
        marginVertical: 10,
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