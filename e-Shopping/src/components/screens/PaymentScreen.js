import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    TextInput, 
} from 'react-native';
import axios from 'axios';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo';
import globalStore from '../../../GlobalStore';
import {action} from 'mobx';


const stripe = require('stripe-client')('pk_test_Aq8bxsorwswJFtcXo5SFk6O900za5qLhQu');
const information = {
    card: {
        number: '4242424242424242',
        exp_month: '02',
        exp_year: '21',
        cvc: '999',
        name: 'leela lee'
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
            paid: false,
        }
    }

    handlePay = async() => {
        // if (!this.state.number.length || !this.state.exp_month.length || !this.state.exp_year.length || !this.state.cvc.length || !this.state.name.length) {
        //     alert("All fields are required!");
        //     return;
        // }

        // const information = {
        //     card: {
        //         number: this.state.number,
        //         exp_month: this.state.exp_month,
        //         exp_year: this.state.exp_year,
        //         cvc: this.state.cvc,
        //         name: this.state.name,
        //     }
        // };

        const card = await stripe.createToken(information);
        const token = card.id;

        const charge ={
            amount: globalStore.order.total,
            currency: 'usd',
            source: token,
            description: `charge for ${globalStore.user.email}`,
            metadata: {
                orderID: globalStore.order._id,
            }
        };

        axios
            .post('http://192.168.0.107:5000/payments', charge)
            .then(result => {
                if (result.data.paid) {
                    this.setState({paid: true});
                    const cartStatusPromise = axios.put(`http://192.168.0.107:5000/carts/?userID=${globalStore.user._id}&status=Success`);
                    const orderStatusPromise = axios.put(`http://192.168.0.107:5000/orders/?id=${globalStore.order._id}&status=Packaging`);
                    return Promise.all([cartStatusPromise, orderStatusPromise]);
                }
            })
            .then(result => {
                if (result[0].data.ok && result[1].data.ok) {
                    globalStore.initCart({});
                    globalStore.initPets([]);
                    globalStore.updateOrderID('');
                    globalStore.updateTotal(0);   
                }
            })
            .catch(err => console.log("Error when try to charge order: " + err));
    }

    navigateToTax = () => this.props.navigation.navigate('Tax')

    navigateToHome = () => this.props.navigation.navigate('Home')

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.form, styles.shadow, {shadowRadius: 0.5, shadowColor: '#0a2f52'}]}>
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

                    <TouchableOpacity   
                        onPress={this.handlePay}
                    >
                        <LinearGradient 
                            colors={['#6E8EAC', '#0E4375', '#0B355D']}
                            style={[styles.btnContainer, {marginBottom: 20}]}    
                        >
                            <Text style={{fontSize: 20, color: '#fff'}}>Pay</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {!this.state.paid ?
                    <View style={{width: 320, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',}}>
                
                        <TouchableOpacity
                            onPress={this.navigateToTax}
                            style={[styles.btn, styles.shadow]}
                        >
                            <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.navigateToHome}
                            style={[styles.btn, styles.shadow]}
                        >
                            <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Shopping</Text>
                        </TouchableOpacity>  
                    </View>
                    :
                    <View style={{width: 300, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity
                            onPress={this.navigateToHome}
                            style={[styles.btn, styles.shadow, {width: 300}]}
                        >
                            <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Shopping</Text>
                        </TouchableOpacity>  
                    </View>
                }  
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
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#1461aa',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    headerContainer: {
        width: 300, 
        borderBottomColor: '#1461aa', 
        borderBottomWidth: 1, 
        marginVertical: 20, 
        paddingBottom: 20
    },
    header: {
        width: 300,
        fontSize: 30,
        color: '#0e4375',
        textAlign: 'center',
    },
    textInput: {
        fontSize: 20, 
        borderStyle: 'solid', 
        borderColor: '#1461aa', 
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
    btnContainer: {
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    btn: {
        width: 150,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5C851',
        borderRadius: 10,
    },
    shadow: {
        shadowColor: '#312810',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 3,
    },
});

const monthData = [
    {
        value: '01'
    },
    {
        value: '02'
    },
    {
        value: '03'
    },
    {
        value: '04'
    },
    {
        value: '05'
    },
    {
        value: '06'
    },
    {
        value: '07'
    },
    {
        value: '08'
    },
    {
        value: '09'
    },
    {
        value: '10'
    },
    {
        value: '11'
    },
    {
        value: '12'
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