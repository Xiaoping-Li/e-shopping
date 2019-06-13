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
                <View>
                   <Text>Credit Card</Text> 

                   <TextInput
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
                        // style={styles.outInput}
                        placeholder="Cardholder's Name"
                        placeholderTextColor="#6E8EAC"
                    />

                    <View>
                        <TextInput
                            value={this.state.number}
                            onChangeText={number => this.setState({number})}
                            // style={styles.outInput}
                            placeholder="Card Number (No dashes or spaces)"
                            placeholderTextColor="#6E8EAC"
                        />

                        <TextInput
                            value={this.state.cvc}
                            onChangeText={cvc => this.setState({cvc})}
                            // style={styles.outInput}
                            placeholder="CVV"
                            placeholderTextColor="#6E8EAC"
                        />    
                    </View>

                    <View>
                        <Dropdown
                            lable="Month"
                            data={monthData}
                        />

                        <Dropdown
                            lable="Year"
                            data={yearData}
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