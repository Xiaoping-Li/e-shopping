import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    TextInput, 
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

const stripe = require('stripe-client')('pk_test_Aq8bxsorwswJFtcXo5SFk6O900za5qLhQu');
const information = {
    card: {
        number: '4242424242424242',
        exp_month: '02',
        exp_year: '21',
        cvc: '999',
        name: 'Billy Joe'
    }
};



class PaymentScreen extends Component {
    constructor() {
        super();
        this.state = {
            number: '',
            exp_month: '',
            exp_year: '',
            cvc: '',
            name: '',
        }
    }

    handlePay = async() => {
        const card = await stripe.createToken(information);
        const token = card.id;
        console.log(token);
    }

    navigateToTax = () => this.props.navigation.navigate('Tax')

    navigateToHome = () => this.props.navigation.navigate('Home')

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Credit Card</Text>
                    </View>
                    
                    <TextInput
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
                        style={[{width: 300}, styles.textInput]}
                        placeholder="Cardholder's Name"
                        placeholderTextColor="#6E8EAC"
                    />

                    <View style={styles.rowContainer}>
                        <TextInput
                            value={this.state.number}
                            onChangeText={number => this.setState({number})}
                            style={[{width: 200}, styles.textInput]}
                            placeholder="Card Number"
                            placeholderTextColor="#6E8EAC"
                        />

                        <TextInput
                            value={this.state.cvc}
                            onChangeText={cvc => this.setState({cvc})}
                            style={[{width: 90}, styles.textInput]}
                            placeholder="CVV"
                            placeholderTextColor="#6E8EAC"
                        />    
                    </View>

                    <View style={[{marginBottom: 20,}, styles.rowContainer]}>
                        <Dropdown
                            label="Month"
                            data={monthData}
                            value={this.state.exp_month}
                            onChangeText={exp_month => this.setState({exp_month})}
                            containerStyle={{width: 200}}
                        />

                        <Dropdown
                            label="Year"
                            data={yearData}
                            value={this.state.exp_year}
                            onChangeText={exp_year => this.setState({exp_year})}
                            containerStyle={{width: 90}}
                        />
                    </View>
                </View>
                

                <TouchableOpacity
                    onPress={this.handlePay}
                    style={styles.btn}
                >
                    <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Pay</Text>
                </TouchableOpacity>

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
    form: {
        width: 350,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        width: 300, 
        borderBottomColor: '#000', 
        borderBottomWidth: 1, 
        marginVertical: 20, 
        paddingBottom: 20
    },
    header: {
        width: 300,
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
    },
    textInput: {
        fontSize: 20, 
        borderStyle: 'solid', 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginVertical: 10, 
        padding: 5, 
        borderRadius: 5
    },
    rowContainer: {
        width: 300, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
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

const monthData = [
    {
        value: '1 - January'
    },
    {
        value: '2 - February'
    },
    {
        value: '3 - March'
    },
    {
        value: '4 - April'
    },
    {
        value: '5 - May'
    },
    {
        value: '6 - June'
    },
    {
        value: '7 - July'
    },
    {
        value: '8 - August'
    },
    {
        value: '9 - September'
    },
    {
        value: '10 - October'
    },
    {
        value: '11 - November'
    },
    {
        value: '12 - December'
    },
];

const yearData = [
    {
        value: '2029'
    },
    {
        value: '2028'
    },
    {
        value: '2027'
    },
    {
        value: '2026'
    },
    {
        value: '2025'
    },
    {
        value: '2024'
    },
    {
        value: '2023'
    },
    {
        value: '2022'
    },
    {
        value: '2021'
    },
    {
        value: '2020'
    },
    {
        value: '2019'
    },
];