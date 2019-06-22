import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Text, 
    TextInput,
} from 'react-native';
import { LinearGradient } from 'expo';


class AddressForm extends Component {
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
    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity   
                    onPress={() => {}}
                >
                    <LinearGradient 
                        colors={['#6E8EAC', '#0E4375', '#0B355D']}
                        style={[styles.btnContainer, {marginBottom: 40}]}    
                    >
                        <Text style={{fontSize: 20, color: '#fff'}}>Use Default Address</Text>
                    </LinearGradient>
                </TouchableOpacity>
                
                <TextInput
                    value={this.state.recipient}
                    // onChangeText={recipient => this.setState({recipient})}
                    onChange={this.props.onChange}
                    style={styles.outInput}
                    placeholder="Recipient Name"
                    placeholderTextColor="#6E8EAC"
                />
                <TextInput
                    value={this.state.street}
                    onChangeText={street => this.setState({street})}
                    style={styles.outInput}
                    placeholder="Street Address"
                    placeholderTextColor="#6E8EAC"
                />

                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.city}
                        onChangeText={city => this.setState({city})}
                        style={[styles.innerInput, {marginRight: 5}]}
                        placeholder="City"
                        placeholderTextColor="#6E8EAC"
                    />
                    <TextInput
                        value={this.state.state}
                        onChangeText={state => this.setState({state})}
                        style={styles.innerInput}
                        placeholder="State"
                        placeholderTextColor="#6E8EAC"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.zip}
                        onChangeText={zip => this.setState({zip})}
                        style={[styles.innerInput, {marginRight: 5}]}
                        placeholder="Zip Code"
                        placeholderTextColor="#6E8EAC"
                    />
                    <TextInput
                        value={this.state.country}
                        onChangeText={country => this.setState({country})}
                        style={styles.innerInput}
                        placeholder="Country"
                        placeholderTextColor="#6E8EAC"
                    />
                </View>

                <TouchableOpacity   
                    onPress={() => {}}
                >
                    <LinearGradient 
                        colors={['#6E8EAC', '#0E4375', '#0B355D']}
                        style={[styles.btnContainer, {marginTop: 40}]}    
                    >
                        <Text style={{fontSize: 20, color: '#fff'}}>Set As Default Address</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AddressForm;

const styles = StyleSheet.create({
    container: {
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
    outInput: {
        width: 300,
        borderStyle: 'solid',
        borderColor:'#6E8EAC',
        borderBottomWidth: 1,
        marginVertical: 5,
        fontSize: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerInput: {
        width: 150,
        borderStyle: 'solid',
        borderColor:'#6E8EAC',
        borderBottomWidth: 1,
        marginVertical: 5,
        fontSize: 20,
    },
    btnContainer: {
        width: 300,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
});